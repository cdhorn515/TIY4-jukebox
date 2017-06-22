(function() {
  'use strict';

  // var tracksUrl = 'https://api.soundcloud.com/tracks/13158665?CLIENT_ID=8538a1744a7fdaa59981232897501e04';
  // var headers = {};
  // 1. First select and store the elements you'll be working with

  const CLIENT_ID = '8538a1744a7fdaa59981232897501e04';
  var containerNode = document.getElementById('container');
  var formInput;
  var playerSectionNode = document.querySelector('.player');
  var playerNode = document.querySelector('.music-player');
  var formNode = document.getElementById('search-form');
  var searchInput = document.getElementById('artistSearchInput');
  //clear input value
  searchInput.addEventListener('click', function(e){
    searchInput.value = '';
  });
  var searchButtonNode = document.getElementById('artistSearchBtn');

  formNode.addEventListener('submit', saveInput);
  function saveInput(e) {
    e.preventDefault();
    formInput = e.srcElement.childNodes[1].value;
    var url = 'https://api.soundcloud.com/tracks/';
    formInput = formInput.toString();
    submitFetch(url, formInput);
  }

  function submitFetch(url, formInput) {
    var fetchUrl = url + '?client_id=' + CLIENT_ID + '&q=' + formInput;
    fetch(fetchUrl).then(function(response) {
      response.json().then(function(info) {
        console.log(info);
        var resultsNode = document.querySelector('.results');
        // loop through data and create elements
        for (var i = 0; i < info.length; i++) {
           var result = info[i];
          //container that holds pic and song title
          var returnedResults = document.createElement('div');
          returnedResults.setAttribute('class', 'flex-item');
          resultsNode.prepend(returnedResults);
          //div that hold picture
          var picNode = document.createElement('div');
          picNode.setAttribute('class', 'picture');
          if (result.artwork_url) {
            picNode.innerHTML = '<img src="' + result.artwork_url + '">';
          } else {
            picNode.innerHTML = '<img src="./images/musicpic.png">';
          }
          returnedResults.appendChild(picNode);

          var songTitle = document.createElement('p');
          songTitle.setAttribute('class', 'song');
          var stream = result.stream_url + "?client_id=" + CLIENT_ID;
          songTitle.setAttribute('id', stream);
          songTitle.textContent = result.title;
          returnedResults.appendChild(songTitle);

          songTitle.addEventListener('click', function(e) {
            // playerNode.setAttribute('src', e.target.href);
            console.log(arguments);
            getSongUrl(e.target.id);
          });
        }
      });

    });
    var fetchUrl = '';
    formInput = '';

  }
function getSongUrl(url){
  fetch(url).then(function(result){
    console.log(result);
    playerNode.src= result.url;
    playerNode.play();
  });
}

}());
