npm install
node_modules/.bin/ng build --prod
rm -rf $OUTPUT
cp -r dist/ikieai $OUTPUT