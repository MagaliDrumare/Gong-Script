# Gong-Script

Dashboard and enablement library for OneStream demo scripts reconstructed from Gong call recordings.

Each demo subject on a call becomes one markdown script containing the presenter's talk track, the on-screen click path, key value messages, and live Q&A — material another consultant can rehearse and deliver.

## Contents

```
├── index.html                      # Gong Demo Script Library dashboard
├── gong-demo-scripts.html          # Same dashboard (standalone copy)
├── css/gong-demo-scripts.css       # Dashboard styles
├── js/gong-demo-scripts.js         # Script cards, filters, collapsible call section
├── canvas/                         # Cursor canvas source for the dashboard
├── demo-script-*.md                # One script per demo subject
├── scripts/deploy-vercel.py        # Deploy the static site to Vercel
└── scripts/push-github.sh          # Push this repo to GitHub
```

## Demo scripts

| Script | Presenter | Segment |
|---|---|---|
| SensibleAI Agents Positioning & Architecture | Jesper Gardtman | 3:12–9:00 (~6 min) |
| SensibleAI Agents MCP Live Demo | Peter Gilfillan | 9:46–30:11 (~20 min) |

Both were extracted from the *SensibleAI Agents - MCP Server demo* call (28 Jul 2026).

## Run locally

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Deploy

The site is static, so Vercel serves it with no build step. Pushing to `main` triggers a deployment when the repo is linked to a Vercel project. To deploy directly:

```bash
VERCEL_TOKEN='your-token' python3 scripts/deploy-vercel.py
```
