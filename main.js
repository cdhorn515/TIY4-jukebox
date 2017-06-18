(function() {
    'use strict';

    var tracksUrl = 'https://api.soundcloud.com/tracks/13158665?client_id=8538a1744a7fdaa59981232897501e04'
    // var headers = {};
    // 1. First select and store the elements you'll be working with
    var containerNode = document.getElementById('container');

    var playerSectionNode = document.querySelector('.player');
    var searchParameter;
    var playerNode = document.querySelector('.music-player');
    var formNode = document.getElementById('search-form');
    var searchButtonNode = document.getElementById('artistSearchBtn');

    function saveInput(e) {
       e.preventDefault();
       var inputValue = document.getElementById('artistSearchInput').value;
       console.log(inputValue);
       alert('you entered: ', inputValue);
     }

    formNode.addEventListener('onsubmit', saveInput);



  // function saveInput() {

  // formNode.onsubmit = function() {


    // var searchInputNode = document.getElementById('artistSearchInput')






    //gets the form element that eventListener will go on

    // function testingFunction(e){
    //   e.preventDefault();
    //   console.log();
    //   var inputValue = document.getElementById('artistSearchInput').value;
    //   console.log(inputValue);
    // }




    // });
    // searchSectionNode.getAttribute('class', 'onsubmit');
    // searchSectionNode.addEventListener('click', testingFunction);


    // function testingFunction(e) {
    //   e.preventDefault();
    //   alert('getting info');
    // }








    // 2. Create your `onSubmit` event for getting the user's search term


    // 3. Create your `fetch` request that is called after a submission


    // 4. Create a way to append the fetch results to your page


    // 5. Create a way to listen for a click that will play the song in the audio play

  }());
