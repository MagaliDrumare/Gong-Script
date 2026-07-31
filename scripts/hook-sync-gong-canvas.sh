#!/usr/bin/env bash
#
# Cursor stop hook: keeps the canvas Cursor renders in step with the repo copy
# that the "Sync Gong demo scripts" automation maintains.
#
# Installed at .cursor/hooks/sync-gong-canvas.sh. This copy is the tracked
# source; see scripts/install-hooks.sh.
#
# Runs on every agent stop, so it stays cheap: the common path is a single file
# comparison. It only reaches the network while a demo script is sitting
# unregistered, which is the window where the automation's result is expected,
# and even then at most once every FETCH_INTERVAL seconds.
#
# Always exits 0 — a stale canvas must never interrupt an agent turn.

set -uo pipefail

cat >/dev/null 2>&1 || true

FETCH_INTERVAL=120

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." 2>/dev/null && pwd)" || exit 0
REPO_CANVAS="$REPO_ROOT/canvas/gong-demo-scripts.canvas.tsx"
STAMP="$REPO_ROOT/.cache/gong-canvas-fetch"

emit_and_exit() {
  echo '{}'
  exit 0
}

[[ -f "$REPO_CANVAS" ]] || emit_and_exit
git -C "$REPO_ROOT" rev-parse --git-dir >/dev/null 2>&1 || emit_and_exit

# Cursor slugifies the workspace path: leading slash dropped, runs of slashes
# and spaces collapsed to single dashes, trailing dash stripped.
slug="$(printf '%s' "$REPO_ROOT" | sed -e 's|^/||' -e 's|[/ ][/ ]*|-|g' -e 's|-$||')"
LOCAL_CANVAS="${CURSOR_CANVAS_FILE:-$HOME/.cursor/projects/$slug/canvases/gong-demo-scripts.canvas.tsx}"

[[ -d "$(dirname "$LOCAL_CANVAS")" ]] || emit_and_exit

pending_script() {
  local f
  for f in "$REPO_ROOT"/demo-script-*.md; do
    [[ -e "$f" ]] || continue
    grep -qF "$(basename "$f")" "$REPO_CANVAS" || return 0
  done
  return 1
}

fetch_due() {
  [[ -f "$STAMP" ]] || return 0
  local last now
  last="$(cat "$STAMP" 2>/dev/null)" || return 0
  [[ "$last" =~ ^[0-9]+$ ]] || return 0
  now="$(date +%s)"
  (( now - last >= FETCH_INTERVAL ))
}

# A script the automation hasn't wired up yet means its commit may still be on
# the remote. Fast-forward only when doing so is completely safe.
if pending_script && fetch_due; then
  mkdir -p "$(dirname "$STAMP")" 2>/dev/null
  date +%s >"$STAMP" 2>/dev/null

  if [[ "$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null)" == "main" ]] \
    && [[ -z "$(git -C "$REPO_ROOT" status --porcelain 2>/dev/null)" ]]; then
    git -C "$REPO_ROOT" fetch --quiet origin main >/dev/null 2>&1 \
      && git -C "$REPO_ROOT" merge --ff-only --quiet FETCH_HEAD >/dev/null 2>&1
  fi
fi

if ! cmp -s "$REPO_CANVAS" "$LOCAL_CANVAS" 2>/dev/null; then
  cp "$REPO_CANVAS" "$LOCAL_CANVAS" 2>/dev/null
fi

emit_and_exit
