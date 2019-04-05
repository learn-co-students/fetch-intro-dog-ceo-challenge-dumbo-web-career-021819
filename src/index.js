console.log('%c HI', 'color: firebrick')

// PART 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let divTag = document.getElementById('dog-image-container')

fetch(imgUrl)
.then((response) => {
  return response.json()
}).then((dogs) => {
  dogs.message.forEach((dog) => {
    divTag.innerHTML += `<img src=${dog} />`
  })
}) 

// PART 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let ulTag = document.getElementById('dog-breeds')

fetch(breedUrl)
.then((response) => {
  return response.json()  
}).then((breeds) => {
  for (breed in breeds.message) {
    ulTag.innerHTML += `<li> ${breed} </li>`
  }
})

// PART 3
ulTag.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'blue'
  }
})

// PART 4
let selectTag = document.getElementById('breed-dropdown')

selectTag.addEventListener('change', function(event) {
  fetch(breedUrl)
.then((response) => {
  return response.json()  
}).then((breeds) => {
  let breedList = []
  for (breed in breeds.message) {
    if (breed.startsWith(event.target.value)) {
    breedList.push(`<li> ${breed} </li>`)
    }
  }
  ulTag.innerHTML = breedList.join(" ")
})
})

