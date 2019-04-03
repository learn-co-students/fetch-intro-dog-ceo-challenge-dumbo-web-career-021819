console.log('%c HI', 'color: firebrick')

// variables for fetching Dog Image
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainerDivTag = document.querySelector('#dog-image-container')
dogContainerDivTag.innerHTML += `<ul id="dog-image-ul"></ul>`
let dogUlTag = document.querySelector("#dog-image-ul")

// variables for fetching Dog Breed
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreedUlTag = document.querySelector("#dog-breeds")

const createDogImgLi = (dogImgUrl) => {
  return `<img src=${dogImgUrl} alt="dog">`
}

const createDogBreedLi = (dogBreed) => {
  return `<li>${dogBreed}</li>`
}

// Fetch Dog Image Url and add to ul
fetch(imgUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    json.message.forEach((message) => {
      dogUlTag.innerHTML += createDogImgLi(message);
    })
  })

// Fetch Dog Breed Url and add to ul
fetch(breedUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    for (const dogBreed in json.message) {
      dogBreedUlTag.innerHTML += createDogBreedLi(dogBreed)
    }
  })


dogBreedUlTag.addEventListener('click',(event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.color = "rgb(5,130,12)";
  }
})

// Filter Doggos
let selectBreedTag = document.querySelector("#breed-dropdown")
selectBreedTag.addEventListener('change', (event) => {
  dogBreedUlTag.innerHTML = ""
  fetch(breedUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      for (const breed in json.message) {
        if (breed[0] === event.target.value) {
          dogBreedUlTag.innerHTML += createDogBreedLi(breed)
        }
      }
    })
})