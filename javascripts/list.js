var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
console.log(listLink);
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});


console.log("booyah");


let songRequest = new XMLHttpRequest();

songRequest.addEventListener("load", songRequestComplete);
songRequest.addEventListener("error", songRequestFailed);

function songRequestComplete(event){
	console.log("songs have loaded");
	let songData = JSON.parse(event.target.responseText);
	console.log("song data", songData);
	showData(songData);
}
function showData(songs){
	let songDiv = document.getElementById("listViewMH");
	let songData = '';

	for(item in songs){
		let songItem = songs[item];
    songData += `<div class='list-content'>
      <div class="Song1 specific-song">
        <h2>${songItem.name}</h2>
         <h4 class="song1list artist-name">${songItem.artist}</h4>
          <h4 class="song1list album-name">${songItem.album}</h4>
           <h4 class="song1list genre-type">${songItem.genre}</h4>
            </div></div>`
	}
	songDiv.innerHTML += songData;
}

function songRequestFailed(event) {
	console.log("dataFailed", event);
}

songRequest.open("GET", "songs.json");
songRequest.send();