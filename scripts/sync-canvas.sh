#!/usr/bin/env bash
#
# Sync the Gong Demo Script Library canvas between this repo and the local
# canvas Cursor opens.
#
#   ./scripts/sync-canvas.sh          pull main, then refresh the local canvas
#   ./scripts/sync-canvas.sh --push   copy the local canvas into the repo and commit
#
# The canvas Cursor renders lives under ~/.cursor/projects/<slug>/canvases/ rather
# than in the repo, so the sync automation (which runs on a cloud checkout) cannot
# write it. Set CURSOR_CANVAS_FILE to override the derived path.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_CANVAS="$REPO_ROOT/canvas/gong-demo-scripts.canvas.tsx"

# Cursor slugifies the workspace path: leading slash dropped, runs of slashes and
# spaces collapsed to single dashes, trailing dash stripped.
derive_canvas_path() {
  local slug
  slug="$(printf '%s' "$REPO_ROOT" \
    | sed -e 's|^/||' -e 's|[/ ][/ ]*|-|g' -e 's|-$||')"
  printf '%s/.cursor/projects/%s/canvases/gong-demo-scripts.canvas.tsx' "$HOME" "$slug"
}

LOCAL_CANVAS="${CURSOR_CANVAS_FILE:-$(derive_canvas_path)}"

if [[ ! -f "$REPO_CANVAS" ]]; then
  echo "error: repo canvas not found at $REPO_CANVAS" >&2
  exit 1
fi

case "${1:---pull}" in
  --pull)
    git -C "$REPO_ROOT" pull --ff-only origin main

    if [[ ! -d "$(dirname "$LOCAL_CANVAS")" ]]; then
      echo "error: canvas directory missing: $(dirname "$LOCAL_CANVAS")" >&2
      echo "Open the canvas in Cursor once, or set CURSOR_CANVAS_FILE." >&2
      exit 1
    fi

    if cmp -s "$REPO_CANVAS" "$LOCAL_CANVAS" 2>/dev/null; then
      echo "Canvas already up to date."
      exit 0
    fi

    cp "$REPO_CANVAS" "$LOCAL_CANVAS"
    echo "Local canvas refreshed from main."
    echo "Reopen the canvas in Cursor to pick up the new scripts."
    ;;

  --push)
    if [[ ! -f "$LOCAL_CANVAS" ]]; then
      echo "error: local canvas not found at $LOCAL_CANVAS" >&2
      exit 1
    fi

    if cmp -s "$LOCAL_CANVAS" "$REPO_CANVAS"; then
      echo "Repo canvas already matches the local canvas; nothing to commit."
      exit 0
    fi

    cp "$LOCAL_CANVAS" "$REPO_CANVAS"
    git -C "$REPO_ROOT" add canvas/gong-demo-scripts.canvas.tsx
    git -C "$REPO_ROOT" commit -m "Update the Gong demo script canvas source."
    echo "Committed. Run 'git push origin main' to publish."
    ;;

  *)
    echo "usage: $(basename "$0") [--pull|--push]" >&2
    exit 2
    ;;
esac
