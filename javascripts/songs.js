console.log("hi");

let songs = [];


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// 
songs.unshift("Karma Police - by RadioHead on the album OK Computer");

// console.log(songs);

songs.push("Tiny Dancer - by Elton John on the album Madman Across the Water");

// console.log(songs);

// songs.splice(0, 2, "*");
// let replaceCharacters = "";
for (let i = 0; i < songs.length; i++) {
	// console.log(songs[i]);
	// replaceCharacters = songs[i].indexOf(">") - 1;
	// console.log(replaceCharacters);
	songs[i] = songs[i].replace('*', '');
		// console.log(songs[i]);
	songs[i] = songs[i].replace('!', '');
	songs[i] = songs[i].replace('(', '');
	songs[i] = songs[i].replace('@', '');
	songs[i] = songs[i].replace('>', '-');
	// console.log(songs[i]);
	// contentArea.innerHTML += `<div class="specific-song">
	// 										<h4>${songs[i]}</h4>
	// 								</div>`;
}

let songs2 = [
{ 
name: "Karma Police",
artist: "RadioHead",
album: "OK Computer",
genre: "Alternative"
},
{
name: "Tiny Dancer",
artist: "Elton John",
album: "Madman Across the Water",
genre: "Folk"
},
{
name: "Scar",
artist: "Missy Higgins",
album: "The Sound White",
genre: "Alternative"
},
{
name: "New York New York",
artist: "Ryan Adams",
album: "Gold",
genre: "Alternative"
}

];

let contentArea = document.getElementById("song-container");
let contentArea2 = document.getElementById("song-container2");

for (i = 0; i < songs2.length; i++) {
	console.log(songs2[i]);
	contentArea.innerHTML += `<div class="Song1 specific-song">
								<h2>${songs2[i].name}</h2>
								<h4 class="song1list artist-name">${songs2[i].artist}</h4>
								<h4 class="song1list album-name">${songs2[i].album}</h4>
								<h4 class="song1list genre-type">${songs2[i].genre}</h4>
								</div>`;

	contentArea2.innerHTML += `<div class="Song1 specific-song">
								<h2>${songs2[i].name}</h2>
								<h4 class="song1list artist-name">${songs2[i].artist}</h4>
								<h4 class="song1list album-name">${songs2[i].album}</h4>
								<h4 class="song1list genre-type">${songs2[i].genre}</h4>
								</div>`;
}
// console.log(songs);

// songs.replace(/r/g, '');

// console.log(songs);

// function mySongs(){
	// let index = songs.indexOf("Legs");
	// console.log(index);
	// let length = Sonnet.length;
	// console.log(length);
	// let characterReplace = songs.replace("Legs", "Movie");
	// document.getElementById("sonnet").innerHTML = winSwitch;
	// let largeSwitch = winSwitch.replace(/ the /gi, " a large ");
	// document.getElementById("sonnet").innerHTML = largeSwitch;
// }

// mySongs(songs)