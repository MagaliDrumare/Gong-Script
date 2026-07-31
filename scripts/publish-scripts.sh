#!/usr/bin/env bash
#
# Publish newly written demo scripts so the "Sync Gong demo scripts" automation
# picks them up, wires them into the canvas and the static dashboard, and
# triggers the Vercel redeploy.
#
#   ./scripts/publish-scripts.sh            commit and push new demo-script-*.md
#   ./scripts/publish-scripts.sh --dry-run  show what would be published
#
# Authentication comes from the git credential helper. No token is stored here;
# this repository is public.

set -euo pipefail

EXPECTED_REMOTE="MagaliDrumare/Gong-Script"
BRANCH="main"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

DRY_RUN=false
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

remote_url="$(git remote get-url origin 2>/dev/null || true)"
if [[ "$remote_url" != *"$EXPECTED_REMOTE"* ]]; then
  echo "error: origin is '$remote_url', expected $EXPECTED_REMOTE" >&2
  echo "Refusing to publish from an unexpected repository." >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "error: on branch '$current_branch', expected $BRANCH" >&2
  exit 1
fi

# Only demo scripts are published; unrelated edits stay in the working tree.
# Built with a read loop rather than mapfile, which macOS bash 3.2 lacks.
pending=()
while IFS= read -r line; do
  [[ -n "$line" ]] && pending+=("${line:3}")
done < <(git status --porcelain -- 'demo-script-*.md')

if [[ ${#pending[@]} -eq 0 ]]; then
  echo "No new or changed demo scripts to publish."
  exit 0
fi

echo "Demo scripts to publish:"
printf '  %s\n' "${pending[@]}"

if [[ "$DRY_RUN" == true ]]; then
  echo "(dry run — nothing committed)"
  exit 0
fi

git add -- "${pending[@]}"

if [[ ${#pending[@]} -eq 1 ]]; then
  subject="Add $(basename "${pending[0]}" .md | sed 's/^demo-script-//' | tr '-' ' ') demo script."
else
  subject="Add ${#pending[@]} demo scripts from Gong calls."
fi

git commit -m "$subject" -m "$(printf '%s\n' "${pending[@]}")"

# The automation pushes to main too, so land on top of anything it committed.
git pull --rebase --quiet origin "$BRANCH"

if ! git push origin "$BRANCH"; then
  echo >&2
  echo "error: push failed." >&2
  echo "The commit is saved locally. If this was an auth failure, the stored" >&2
  echo "GitHub credential likely lacks write access to $EXPECTED_REMOTE." >&2
  exit 1
fi

echo
echo "Published. The sync automation runs on this push and typically commits"
echo "the canvas and dashboard updates within a couple of minutes."
