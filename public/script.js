document.getElementById("lyrics").style.color = "#000";
document.getElementById("author").style.color = "#b3b3b3";

const setmode = (mode) => {
  state.select = mode;
  switch (state.select) {
    case "lyrics":
      document.getElementById("lyrics").style.color = "#000";
      document.getElementById("author").style.color = "#b3b3b3";
      break;
    case "author":
      document.getElementById("author").style.color = "#000";
      document.getElementById("lyrics").style.color = "#b3b3b3";
      break;
  }
};

const song = (fwd) => {
  switch (fwd) {
    case "forward":
      var position = parseInt(window.location.hash.slice(1));
      if (!position) {
        return (window.location.href = "#1");
      } else if (position === song_list.songs.length) {
        return;
      }
      window.location.href = "#" + (position + 1);
      loadsong();
      break;
    case "backward":
      var position = parseInt(window.location.hash.slice(1));
      if (!position) {
        return;
      }
      window.location.href = "#" + (position - 1);
      loadsong();
      break;
  }
};

const loadsong = () => {
  for (x of song_list.songs) {
    if (window.location.hash == `#${x.pos}`) {
      document
        .getElementById(window.location.hash.slice(1))
        .scrollIntoView(true);
      document.getElementById("now-play")
	    .innerHTML = x.pos + ". " + x.artist_song;
      player.load_video(x.id, x.time);
    }
  }
};

window.addEventListener("hashchange",
  function () {
    loadsong();
  },
);

window.onload = () => {
  loadsong();
};

document.querySelector("#findsong").addEventListener("change", () => {
  let value = parseInt(document.querySelector("#findsong").value);
  if (value > song_list.songs.length || value <= 0 || isNaN(value)) return;
  window.location.href = "#" + value;
});

document.querySelector("#now-play").addEventListener("click", () => {
  document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
});

var state = new Vue({
  data: {
    select: "lyrics",
  },
});

var player = new Vue({
  el: "#player",
  data: { url: "https://www.youtube.com/embed/0qJRAmktUJw?autoplay=1" },
  methods: {
    load_video: (id, time) => {
      player.url = `https://www.youtube.com/embed/${id}?start=${time}&autoplay=1`;
    },
  },
});

var song_list = new Vue({
  el: "#song-list",
  data: { songs: [] },
  mounted: () => {
    let lyrics;
    let pattern = /- (.*) \[(.*)\]\(http(?:s|.*)\:\/\/(?:www|m|.*)(?:\.|.*)(?:youtu\.be|youtube\.com)\/(?:watch\?v=|.*)([A-Za-z0-9_\-]{11})(?:\?|&)t=(\d+)(?:s|.*)\).*/;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        lyrics = xhr.responseText
          .split("\n")
          .filter((line) => /(youtu\.be|(?:www\.|.*)youtube.com)/.test(line));
        var i = 1;
        lyrics.forEach((line) => {
          let match = line.match(pattern);
          if (match === null || match.length !== 5) {
            console.log(`error: can not parse "${line}"`);
            return;
          }
          song_list.songs.push({
            excerpt: match[1],
            artist_song: match[2],
            id: match[3],
            time: match[4],
            pos: i,
          });
          i++;
        });
      }
    };
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/narze/torpleng/main/README.md"
    );
    xhr.send();
  },
});
