(function() {
  'use strict';

  // var tracksUrl = 'https://api.soundcloud.com/tracks/13158665?CLIENT_ID=8538a1744a7fdaa59981232897501e04';
  // var headers = {};
  // 1. First select and store the elements you'll be working with
  var containerNode = document.getElementById('container');
  var formInput;
  // var redirectUrl = 'http://api.soundcloud.com/resolve';
  var playerSectionNode = document.querySelector('.player');
  var playerNode = document.querySelector('.music-player');
  var formNode = document.getElementById('search-form');
  var searchButtonNode = document.getElementById('artistSearchBtn');

  formNode.addEventListener('submit', saveInput);

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

            // loop through data and create divs
            for (var i = 0; i < info.length; i++) {
              var result = info[i];

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

              var songTitleNode = document.createElement('a');
              songTitleNode.setAttribute('href', '#');
              returnedResults.appendChild(songTitleNode);

              var songTitle = document.createElement('p');
              songTitle.setAttribute('class', 'songTitle');
              // songTitle.setAttribute('id', result.stream_url);
              songTitle.textContent = result.title;
              songTitleNode.appendChild(songTitle);
              songTitle.addEventListener('click', function(e){
                  playerNode.setAttribute('src', result.stream_url + "?client_id=" + CLIENT_ID);
              });
              // var songLink = document.createElement('a');
              //add listener to  textContent
            };
        });
    });
    var fetchUrl = '';
    //click listener to input field return an empty string
    var formInput = '';
  }

// }
//change url back to original outside of loop but inside of fetch req



// 2. Create your `onSubmit` event for getting the user's search termdone


// 3. Create your `fetch` request that is called after a submission done


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

}());
