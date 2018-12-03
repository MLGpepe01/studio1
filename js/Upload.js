//this file will be used for uploading files onto the website
//firebase.initializeApp(config);

const database = firebase.database();
const posts = database.ref('posts');

// Initialize DOM refs
const imagesDiv = document.getElementById('images');
const imageForm = document.getElementById('image-form');
const urlInput = document.getElementById('image-url');





// Display images
posts.on('child_added', data => {
  let img = document.createElement('img');
  img.src = data.val().image;
  imagesDiv.appendChild(img);
});

// Add a new image
imageForm.addEventListener('submit', e => {
  e.preventDefault();

  posts.push({ image: urlInput.value }, () => {
    urlInput.value = ''; // signal complete
  });

});
