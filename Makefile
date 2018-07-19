install: 
		npm install

start: 
		npm run babel-node -- src/bin/gendiff.js --format json before.json after.json

test:
		npm test

build:
		rm -rf dist
		npm run build

lint: 
		npm run eslint .

publish: 
		npm publish
