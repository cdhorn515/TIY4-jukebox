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

function submitFetch(url, formInput){
  var fetchUrl = url + '?client_id=' + CLIENT_ID + '&q=' + formInput;
console.log(fetchUrl);
  // var fetchUrl = url + clientId + formInput + ;
  // console.log(fetchUrl);
  // console.log(typeof(formInput));
  fetch(fetchUrl).then(function(response){
    response.json().then(function(info){
        console.log(info);
        var resultsNode = document.querySelector('.results');
        // loop through data and create divs
        for (var i = 0; i < info.length; i++) {
          var result = info[i];

        var returned = document.createElement('div');
        returned.setAttribute('class', 'flex-item');
        resultsNode.appendChild(returned);

        var picNode = document.createElement('div');
        picNode.innerHTML = '<img src="' + result.artwork_url + '">';
        returned.appendChild(picNode);

        var songTitleNode = document.createElement('h5');
        songTitleNode.setAttribute('class', 'songTitle');
        songTitleNode.textContent = result.title;
        returned.appendChild(songTitleNode);
        returned.appendChild(songTitleNode);

        // var bandNameNode = document.createElement('h4');
        // bandNameNode.setAttribute('class', 'bandName');
        // bandNameNode.textContent = info.
        //
        // ('bandName');



        }
    });
  });
}



    // 2. Create your `onSubmit` event for getting the user's search termdone


    // 3. Create your `fetch` request that is called after a submission done


    // 4. Create a way to append the fetch results to your page


    // 5. Create a way to listen for a click that will play the song in the audio play

  }());
