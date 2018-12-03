// Write your JS here
import test from './script2.js';

console.log('test');

test();

import * as upload from './Upload.js';
import * as unpass from './usernameandpassword.js';
import * as searchbar from './searchbar.js';
import * as post from './post.js';

//firebase.initializeApp(config);

const database = firebase.database();
const posts = database.ref('posts');

// Initialize DOM refs
const imagesDiv = document.getElementById('images');
const imageForm = document.getElementById('image-form');
const urlInput = document.getElementById('image-url');
const textInput = document.getElementById('image-text');

// Display images
export function get_database_snapshot() {
  // Get reference to the database service
  var database = firebase.database();
  // Get reference to the data you want. 
  var ref = database.ref('/posts');
  // Read the data from the database and take a snapshot
  // of that data
  ref.once("value").then(function(snapshot){
    // .val() gets the data from the snapshot.
    console.log(snapshot.val());
    // Can provide a callback method to perform an action
    // on the data returned from the DB.
    //callback(snapshot);
    getElementById('images')
  });
}

posts.on('child_added', data => {
  console.log (data.val());
  //let img = document.createElement('img');
  //img.src = data.val().image;
  //imagesDiv.appendChild(img);
});

// Add a new image
imageForm.addEventListener('submit', e => {
  e.preventDefault();

  posts.push({ image: urlInput.value,text: textInput.value }, () => {
    urlInput.value = '';
    textInput.value= '';
     // signal complete
  });


});
get_database_snapshot();
