set arg1=%1
npm run compile
cd ../..
git fetch
git add .
git commit -m "%arg1%"
git push origin dev
