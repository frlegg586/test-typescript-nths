build:
	tsc -p src/
link: build
	ln -Tf assets/nths.jpg main/nths.jpg
	ln -Tf src/index.html main/index.html
	ln -Tf src/main.js main/main.js
	ln -Tf src/styles.css main/styles.css
test: link
	cd main
	python -m http.server 9000 --directory main
clean:
	rm -rf main
	mkdir main
	touch main/.keep
	rm src/main.js
