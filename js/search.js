String.prototype.replaceChars = function (character, replacement) {
	var str = this;
	var a;
	var b;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === character) {
			a = str.substr(0, i) + replacement;
			b = str.substr(i + 1);
			str = a + b;
		}
	}
	return str;
}

function search(query) {
	switch (query.substr(0, 2)) {
		case '-y':
			query = query.substr(3);
			window.open('https://www.youtube.com/results?search_query=' +
				query.replaceChars(' ', '%20'), '_blank');
			break;
		case '-w':
			query = query.substr(3);
			window.open(
				'https://es.wikipedia.org/w/index.php?search=' +
				query.replaceChars(' ', '%20'), '_blank');
			break;
		case '-r':
			query = query.substr(3);
			window.open(
				'https://www.reddit.com/search?q=' +
				query.replaceChars(' ', '%20'), '_blank');
			break;
		default:
			window.open('https://www.google.com/#q=' +
				query.replaceChars(' ', '%20'), '_blank');
	}
}

searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		if (searchInput.value === '') {
			searchInput.placeholder = '... escribe algo';
		} else {
			search(this.value);
			searchInput.value = '';
			searchInput.placeholder = ' -y ';
		}
	}
});
