(function() {
    'use strict';

    // var tracksUrl = 'https://api.soundcloud.com/tracks/13158665?client_id=8538a1744a7fdaa59981232897501e04';
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

    function saveInput(e) {
       e.preventDefault();
       formInput = e.srcElement.childNodes[1].value;
      var url = 'http://api.soundcloud.com/tracks/';
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
  const client_id = '8538a1744a7fdaa59981232897501e04';
  var fetchUrl = url + '?client_id=' + client_id + '&q=' + formInput;
console.log(fetchUrl);
  // var fetchUrl = url + clientId + formInput + ;
  // console.log(fetchUrl);
  // console.log(typeof(formInput));
  fetch(fetchUrl, {
    append: 'client_id=' + client_id,
    append: '&q=' + '"'+ formInput + '"'
  }).then(function(response){
    console.log(response);
  });
  // alert("fetching" + tracksUrl + formInput);
  // console.log(tracksUrl);
}

// try {
//   headers.client_id = 'client_id=' + client_id;
// }



    // 2. Create your `onSubmit` event for getting the user's search term


    // 3. Create your `fetch` request that is called after a submission


    // 4. Create a way to append the fetch results to your page


    // 5. Create a way to listen for a click that will play the song in the audio play

  }());
