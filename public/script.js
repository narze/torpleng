document.getElementById('lyrics').style.color = "#000";
document.getElementById('author').style.color = "#b3b3b3"

var state = new Vue({
	data: {
		select: 'lyrics'
	}
})

const setmode = (mode) => {
	state.select = mode;
	switch(state.select) {
		case 'lyrics': 
			document.getElementById('lyrics').style.color = "#000";
			document.getElementById('author').style.color = "#b3b3b3";
			break;
		case 'author': 
			document.getElementById('author').style.color = "#000";
			document.getElementById('lyrics').style.color = "#b3b3b3";
		break;
	}
}

var player = new Vue({
	el: '#player',
	data: { url: 'https://www.youtube.com/embed/0qJRAmktUJw?autoplay=1' },
	methods: {
	  load_video: (id, time) => {
		player.url = `https://www.youtube.com/embed/${id}?start=${time}&autoplay=1`;
	  }
	}
});

var song_list = new Vue({
	el: '#song-list',
	data: { songs: [] },
	mounted: () => {
	  let lyrics;
	  let patternShort = /- (.*) \[(.*)\]\(https\:\/\/youtu\.be\/([a-zA-Z0-9_-]+)\?t=(\d+)\).*/;
		let patternFull = /- (.*) \[(.*)\]\(https\:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)\&t=(\d+)s?\).*/;
	  let xhr = new XMLHttpRequest();
	  xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
		  lyrics = xhr.responseText
						 .split("\n")
						 .filter((line) => (/youtu\.be/.test(line) || /youtube\.com/.test(line)))
		  lyrics.forEach((line) => {
			let match = line.match(patternShort);
			if (match === null || match.length !== 5) {
				match = line.match(patternFull);
				if (match === null || match.length !== 5) {
					console.log(`error: can not parse "${line}"`);
					return;
				}
			}
			song_list.songs.push({
			  excerpt: match[1],
			  artist_song: match[2],
			  id: match[3],
			  time: match[4]
			});
		  });
		}
	  }
	  xhr.open(
		"GET",
		"https://raw.githubusercontent.com/narze/torpleng/main/README.md"
	  );
	  xhr.send();
	}
});
