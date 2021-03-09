
# 当发生错误时中止脚本
set -e

rm -rf dist
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git remote add origin https://gitee.com/lanycsq/lanyc-ui-website.git
git push -f -u origin master
cd -