all: dist/bolsas.js

dist/bolsas.js: clientApp/js/**/*.js
	node_modules/.bin/browserify -t brfs --debug -e clientApp/js/bolsas.js -o serverApp/public/js/bolsas.js
clean:
	rm -f serverApp/public/js/bolsas.js