const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const helpers = script.slice(script.indexOf('function parseIP('), script.indexOf('function updateSubnet('));
const context = vm.createContext({});
vm.runInContext(helpers, context);
test('JavaScript parses', () => { new vm.Script(script); });
test('IPv4 input validates octets and rejects injection', () => {
  assert.equal(context.parseIP('192.168.1.42'), 3232235818);
  for (const value of ['256.1.1.1','1.2.3','1.2.3.4.5','-1.2.3.4','<script>','1e2.0.0.1']) assert.equal(context.parseIP(value), null);
});
test('/24 conventional subnet', () => {
  const x = context.subnetInfo('192.168.1.42',24);
  assert.equal(x.network,'192.168.1.0'); assert.equal(x.broadcast,'192.168.1.255');
  assert.equal(x.hosts,254); assert.equal(x.first,'192.168.1.1'); assert.equal(x.last,'192.168.1.254');
});
test('prefix edges and high unsigned address', () => {
  assert.equal(context.subnetInfo('172.16.10.1',16).hosts,65534);
  const x = context.subnetInfo('255.255.255.254',30);
  assert.equal(x.network,'255.255.255.252'); assert.equal(x.broadcast,'255.255.255.255'); assert.equal(x.hosts,2);
  for(const p of [15,31,32,24.5]) assert.equal(context.subnetInfo('1.2.3.4',p),null);
});
test('six distinct lesson IDs and six quizzes', () => {
  const data = script.slice(script.indexOf('const lessons='),script.indexOf('const state='));
  assert.equal((data.match(/question:/g)||[]).length,6);
  for(const id of ['packet','layers','subnet','dns','transport','web']) assert.ok(data.includes(`id:'${id}'`));
});
test('no external code, embedded frames or credentials', () => {
  assert.ok(!/<script[^>]+src=/i.test(html)); assert.ok(!/<iframe/i.test(html));
  assert.ok(!/\bfetch\s*\(|XMLHttpRequest|WebSocket/.test(script));
  assert.ok(!/ghp_|sk-ant-/.test(html));
});
