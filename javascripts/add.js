
var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

for (let j = 0; j < songs2.length; j++) {
    
    songs2.push({name: "Whatever", artist: "Whoever", album: "Whatever", genre: "Whatever"}); // Array now contains 1 item
    contentArea2.innerHTML += `<div class="Song1 specific-song">
                              <h2>${songs2[j].name}</h2>
                              <h4 class="song1list artist-name">${songs2[j].artist}</h4>
                              <h4 class="song1list album-name">${songs2[j].album}</h4>
                              <h4 class="song1list genre-type">${songs2[j].genre}</h4>
                              </div>`;
    }