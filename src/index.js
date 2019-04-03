console.log('%c HI', 'color: firebrick')

// Add javascript so that on page load fetch the images using the url above ⬆️ parse the response as JSON add image elements to the DOM for each🤔 image in the array

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    parsedJson["message"].forEach(function(dog) {
      createImg(dog);
    })
  });

function createImg(imageUrl) {
  let newImgTag = document.createElement('img')
  newImgTag.src = `${imageUrl}`;
  document.querySelector("#dog-image-container").appendChild(newImgTag)
};

/* Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
After the first challenge is completed, add javascript so that:

on page load, fetch all the dog breeds using the url above ⬆️
add the breeds to the page in an <ul> (take a look at the included index.html)*/

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    Object.keys(parsedJson["message"]).forEach(function(dog) {
      createBreedList(dog);
    })
  });

function createBreedList(breedUrl) {
  let newLiTag = document.createElement('li')
  newLiTag.textContent = `${breedUrl}`
  document.querySelector("#dog-breeds").appendChild(newLiTag)
};

/* Challenge 3
Once all of the breeds are rendered in the <ul>, add javascript so that the font color of a particular <li> changes on click. This can be a color of your choosing.

When the user clicks any of the dog breed list items, the color the text should change. */

document.querySelector("#dog-breeds").addEventListener('click', function(event) {
  if (event.target.tagName == 'LI') {
    event.target.style.backgroundColor = "red";
  }
});

/*Challenge 4
Once we are able to load all of the dog breeds onto the page, add javascript so that the user can filter breeds that start with a particular letter using a dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet */

document.querySelector("#breed-dropdown").addEventListener('change', function(event) {
  document.querySelector("#dog-breeds").innerHTML = '';
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    }).then(function(parsedJson) {
      if (event.target.value == 'all') {
        Object.keys(parsedJson["message"]).forEach(function(dog) {
          createBreedList(dog);
      })} else {
      Object.keys(parsedJson["message"]).forEach(function(dog) {
         if (dog.charAt(0) == event.target.value) {
          createBreedList(dog);
        }
      })}
})
});
