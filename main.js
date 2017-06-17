(function() {
  'use strict';

var tracksUrl= 'https://api.soundcloud.com/tracks/13158665?client_id=8538a1744a7fdaa59981232897501e04'
// var headers = {};
// 1. First select and store the elements you'll be working with
var containerNode = document.getElementById('container');

var playerSectionNode = document.querySelector('.player');
var searchParameter;
var playerNode = document.querySelector('.music-player');

//gets the form element that eventListener will go on
var searchSectionNode = document.querySelector('.search-form');
var searchInputNode = document.querySelector('.searchInput');
  if (searchInputNode.length > 0){
  var searchParameter = searchInputNode.elements('artistSearch').value;
  console.log(searchParameter);
  return searchParameter;
  }
// searchSectionNode.getAttribute('class', 'onsubmit');
// searchSectionNode.addEventListener('click', testingFunction);

  function testingFunction() {
    e.preventDefault();
    alert('getting info');
  }





var searchInputNode = document.querySelector('.searchInput');

var searchButtonNode = document.getElementById('artistSearchBtn');



// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

}());
