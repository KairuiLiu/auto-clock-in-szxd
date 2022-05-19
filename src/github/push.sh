#! /bin/bash

remote_repo="https://${GITHUB_ACTOR}:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" # remote repo address

git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config user.name "GitHub Actions"

git add .
git commit -m "update image 😎"
git push
