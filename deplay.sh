#!/usr/bin/env sh


# 当发生错误时中止脚本
set -e

rm -rf dist
yarn build
cd dist
git init
git add -A
git commit -m 'update'
git branch -M main
git remote add origin git@github.com:lanycsq/lanyc-ui-website.git
git push -u -f origin main

cd -