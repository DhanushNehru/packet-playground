# Packet Playground

Learn networking by changing things and watching what happens.

**Website:** https://packet-playground.netlify.app/

A free, mobile-friendly learning MVP with six lessons: packet journeys, TCP/IP layers, IPv4 subnetting, DNS, TCP vs UDP, and a web request over TLS and TCP. Each lesson includes an explanation, an interactive model and a knowledge check.

## Run locally

No frontend dependencies or build step are required. Open `index.html`, or run:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. With Node 20+ installed, run `npm test` for the core checks.

## What works

- Play, pause, single step, reset and playback speed for packet journeys.
- DNS cache-hit and uncached-lookup scenarios.
- TCP vs UDP with one deliberately dropped sample data packet.
- IPv4 /16 through /30 subnet calculations with validation.
- Four-layer TCP/IP header explorer.
- Six quiz checks, local progress, light/dark theme and reduced motion.
- No login, analytics, backend, API key, network capture or paid service.

## Limits

These are simplified educational simulations, not live network measurements or a certification course. Subnetting here excludes /31 and /32. DNS omits CNAMEs and more complex caching. Transport does not model a complete TCP state machine or real timers. The web example uses a fresh TCP/TLS connection and explains that HTTP/3 uses QUIC over UDP.

Progress and preferences stay in this browser's local storage. Reset progress clears completed lessons, not theme preferences. If storage is blocked, lessons still work for the current session.

## Deploy

Netlify publishes the repository root with no build command. The initial production branch is `feature` while the MVP PR is reviewed. After an approved merge, change Netlify's production branch to `main`. Hosting remains subject to the account's free-plan limits. No paid services are needed by the application.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md). Issues are scoped for incremental improvements beyond this MVP. Do not copy third-party assets or introduce paid dependencies without discussing it first.
