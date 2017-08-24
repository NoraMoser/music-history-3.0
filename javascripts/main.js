
// let songsRequest = new XMLHttpRequest();

// songsRequest.addEventListener("load", bigDataComplete);
// songsRequest.addEventListener("error", bigDataFailed);

// function bigDataComplete(event){
// 	console.log("THE BIG data has loaded");
// 	let bigData = JSON.parse(event.target.responseText);
// 	console.log("Time of Big Data", Date.now() - startTime);
// 	console.log("bigData", bigData);
// }

// function bigDataFailed(event){
// 	console.log("dataFailed", event);
// }

// songsRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
// songsRequest.send();
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
		songData += "<div>";
		songData += "<h2>" + songItem.name + ":" + songItem.artist + ":" + songItem.album + ":" + songItem.genre + "</h2>";
		songData += "</div>";
	}
	songDiv.innerHTML += songData;
}

function songRequestFailed(event) {
	console.log("dataFailed", event);
}

songRequest.open("GET", "songs.json");
songRequest.send();