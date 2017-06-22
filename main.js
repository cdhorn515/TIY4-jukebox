(function() {
  'use strict';

  // var tracksUrl = 'https://api.soundcloud.com/tracks/13158665?CLIENT_ID=8538a1744a7fdaa59981232897501e04';
  // var headers = {};
  // 1. First select and store the elements you'll be working with

  const CLIENT_ID = '8538a1744a7fdaa59981232897501e04';
  var containerNode = document.getElementById('container');
  var formInput;
  // var redirectUrl = 'http://api.soundcloud.com/resolve';
  var playerSectionNode = document.querySelector('.player');
  var playerNode = document.querySelector('.music-player');
  var formNode = document.getElementById('search-form');
  var searchInput = document.getElementById('artistSearchInput');
  var searchButtonNode = document.getElementById('artistSearchBtn');

  formNode.addEventListener('submit', saveInput);

  // FIXME:
  //when you click on the search box it clears out any previous search
  // searchInput.addEventListener('click', function() {
  //   searchInput.textContent = '';
  //   var fetchUrl = ''
  // });
  //flex container nodes for results of api call:
  // console.log(CLIENT_ID);
  function saveInput(e) {
    e.preventDefault();
    formInput = e.srcElement.childNodes[1].value;
    var url = 'https://api.soundcloud.com/tracks/';
    //  fetchUrl = url + CLIENT_ID + formInput;
    console.log(e);
    //  var inputValue = document.getElementById('artistSearchInput').value;
    //  console.log(inputValue);
    formInput = formInput.toString();
    console.log('formInput: ' + formInput);
    console.log(formInput.toString());
    // console.log(url + formInput);
    //  alert('you entered: ' + formInput);
    submitFetch(url, formInput);
  }

  function submitFetch(url, formInput) {
    var fetchUrl = url + '?client_id=' + CLIENT_ID + '&q=' + formInput;
    console.log(fetchUrl);
    // var fetchUrl = url + clientId + formInput + ;
    // console.log(fetchUrl);
    // console.log(typeof(formInput));
    fetch(fetchUrl).then(function(response) {
      response.json().then(function(info) {
        console.log(info);
        var resultsNode = document.querySelector('.results');
        var result = {};
        // loop through data and create divs
        for (var i = 0; i < info.length; i++) {
          result = info[i];

          var returnedResults = document.createElement('div');
          returnedResults.setAttribute('class', 'flex-item');
          resultsNode.prepend(returnedResults);

          var picNode = document.createElement('div');
          picNode.setAttribute('class', 'picture');
          if (result.artwork_url) {
            picNode.innerHTML = '<img src="' + result.artwork_url + '">';
          } else {
            picNode.innerHTML = '<img src="./images/musicpic.png">';
          }
          returnedResults.appendChild(picNode);

          // songTitleNode.appendChild(stream);
          var songTitleNode = document.createElement('a');
          // playerNode.setAttribute('src', result.stream_url + "?client_id=" + CLIENT_ID);
          var stream = result.stream_url + "?client_id=" + CLIENT_ID;
          songTitleNode.setAttribute('href', stream);
          returnedResults.appendChild(songTitleNode);

          var songTitle = document.createElement('p');
          songTitle.setAttribute('class', 'song');
          // songTitle.setAttribute('id', "songStream");
          // console.log('id' + result.stream_url);
          songTitle.textContent = result.title;
          songTitleNode.appendChild(songTitle);

          songTitle.addEventListener('click', function(e) {
            // FIXME:
            // alert('stream url= ' + stream);
            playerNode.src = clickedSong + "?client_id=" + CLIENT_ID;
            playerNode.src = e.target.href.stream;
            console.log(playerNode.src);
          });
        };
      });

    });
    var fetchUrl = '';
  }

}());
