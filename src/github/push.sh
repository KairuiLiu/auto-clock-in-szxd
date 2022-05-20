#! /bin/bash

remote_repo="https://${GITHUB_ACTOR}:$GH_TOKEN@github.com/${GITHUB_REPOSITORY}.git" # remote repo address

git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config user.name "GitHub Actions"

git add . && git commit -m "update clockin log 😎" && git push && curl \
  --header 'Authorization: Bearer $GH_TOKEN' -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/${GITHUB_REPOSITORY}/dispatches \
  -d '{"event_type":"reclockin"}'
