#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
REMOTE="https://github.com/MagaliDrumare/Gong-Script.git"

git remote set-url origin "$REMOTE"
echo "Pushing main to $REMOTE"
git push -u origin main --force-with-lease
