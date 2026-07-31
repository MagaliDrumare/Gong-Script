#!/usr/bin/env python3
"""Deploy OneStream Gong Demo Scripts static site to Vercel."""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEPLOY_FILES = [
    "gong-demo-scripts.html",
    "index.html",
    "vercel.json",
    "css/gong-demo-scripts.css",
    "css/style.css",
    "js/gong-demo-scripts.js",
    "js/main.js",
    "data/posts.json",
    "demo-script-sensible-ai-agents-positioning.md",
    "demo-script-sensible-ai-agents-mcp-live-demo.md",
    "README.md",
]

PROJECT_NAME = os.environ.get("VERCEL_PROJECT", "onestream-gong-demo-scripts")
TEAM_ID = os.environ.get("VERCEL_TEAM_ID")
TEAM_SLUG = os.environ.get("VERCEL_TEAM_SLUG", "mdrumares-projects")


def main() -> int:
    token = os.environ.get("VERCEL_TOKEN")
    if not token:
        print("Set VERCEL_TOKEN before running.", file=sys.stderr)
        return 1

    files = []
    for rel in DEPLOY_FILES:
        path = os.path.join(ROOT, rel)
        if not os.path.isfile(path):
            print(f"Missing file: {rel}", file=sys.stderr)
            return 1
        with open(path, encoding="utf-8") as handle:
            files.append({"file": rel, "data": handle.read()})

    payload = {
        "name": PROJECT_NAME,
        "files": files,
        "target": "production",
    }

    url = "https://api.vercel.com/v13/deployments"
    if TEAM_ID:
        url += f"?teamId={TEAM_ID}"
    elif TEAM_SLUG:
        url += f"?teamSlug={TEAM_SLUG}"

    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=120) as response:
            body = json.loads(response.read().decode())
    except urllib.error.HTTPError as error:
        print(f"Deploy failed ({error.code}):", file=sys.stderr)
        print(error.read().decode(), file=sys.stderr)
        return 1

    url = body.get("url")
    print(f"Deployed: https://{url}" if url else json.dumps(body, indent=2))
    if body.get("inspectorUrl"):
        print(f"Inspector: {body['inspectorUrl']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
