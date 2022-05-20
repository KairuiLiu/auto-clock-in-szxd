#! /bin/bash

remote_repo="https://${GITHUB_ACTOR}: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@github.com/${GITHUB_REPOSITORY}.git" # remote repo address

git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config user.name "GitHub Actions"

if( git add . && git commit -m "update clockin log 😎" && git push )then
  curl \
  --header 'Authorization: Bearer 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' -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/${GITHUB_REPOSITORY}/dispatches \
  -d '{"event_type":"reclockin"}'
fi
