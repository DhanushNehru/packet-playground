# Contributing

Start with an open issue and describe your approach before doing a large change. Keep each pull request focused on one outcome. Changes go on a feature branch with a pull request to `main`.

## Local setup

The app is intentionally small: `index.html` contains the presentation, lesson data and browser simulation logic. No package install is needed. Serve the folder with `python3 -m http.server 8080`. Run `npm test` with Node 20+.

## Quality checks

- Test at 320px, 390px and desktop width. No page-wide horizontal overflow.
- Use only the keyboard to reach every control. Keep visible focus and meaningful labels.
- Check light and dark themes, system reduced motion and the page motion toggle.
- Test play/pause, step, reset, navigation away from a running lab, invalid IPs and progress reload.
- Keep scenario limitations visible. Verify technical claims against primary standards or the lesson sources.
- Add tests for calculations and state transitions you change. Never add secrets, tracking, external model calls or a paid service.
- Use original diagrams and explanations; do not commit other designers' artwork or screenshots.

## Pull requests

Explain the user problem, the change, how it was tested and any remaining limitations. Include before/after screenshots for visual changes, and mention the issue number. Do not merge your own PR without maintainer approval.

## Security reports

Do not open a public issue containing credentials or personal information. Use the repository's private vulnerability reporting option if it is enabled, or ask the maintainer for a private reporting route. Simulations must not scan devices or collect traffic.
