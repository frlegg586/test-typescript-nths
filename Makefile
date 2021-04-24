build:
	tsc -p src/
link: build
	ln -T assets/nths.jpg main/nths.jpg
	ln -T src/index.html main/index.html
	ln -T src/main.js main/main.js
	ln -T src/styles.css main/styles.css
test: link
	cd main
	python -m http.server 9000 --directory main
clean:
	rm -rf main
	mkdir main
