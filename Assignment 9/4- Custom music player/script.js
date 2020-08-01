const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//song titles
const songs = ["song1", "song2", "song3"];

//keep track of song
let songIndex = 0;

//initially load song details into DOM
loadSong(songs[songIndex]);

//play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

//pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  audio.pause();
}

//previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  //console.log(progressPercent);
  progress.style.width = `${progressPercent}%`;
}

//set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
  console.log(clickX);
}

//update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `songs/${song}.mp3`;
  cover.src = `pictures/${song}.jpg`;
}

//Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//change songs
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

//Time/song update event
audio.addEventListener("timeupdate", updateProgress);

//click on progress bar
progressContainer.addEventListener("click", setProgress);

//song ends
audio.addEventListener("ended", nextSong);
