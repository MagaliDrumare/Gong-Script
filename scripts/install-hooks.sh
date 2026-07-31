#!/usr/bin/env bash
#
# Install the tracked hook sources into .cursor/, which Cursor reads but which
# tooling is not always allowed to write directly.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

mkdir -p "$REPO_ROOT/.cursor/hooks"
cp "$REPO_ROOT/scripts/hooks.json" "$REPO_ROOT/.cursor/hooks.json"
cp "$REPO_ROOT/scripts/hook-sync-gong-canvas.sh" "$REPO_ROOT/.cursor/hooks/sync-gong-canvas.sh"
chmod +x "$REPO_ROOT/.cursor/hooks/sync-gong-canvas.sh"

echo "Installed .cursor/hooks.json and .cursor/hooks/sync-gong-canvas.sh"
echo "Cursor reloads hooks on save; check Settings → Hooks to confirm."
