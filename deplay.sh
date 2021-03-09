#!/usr/bin/env sh


# 当发生错误时中止脚本
set -e

rm -rf dist
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git branch -M master
git remote add origin git@github.com:lanycsq/lanyc-ui-website.git
git push -f -u origin master

cd -