console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDivTag = document.body.querySelector("#dog-image-container");

fetch(imgUrl)
  .then(response => {
    return response.json();
  })
  .then(jsonPromise => {
    jsonPromise.message.forEach(url => {
      imgDivTag.innerHTML += `<img src=${url}>`
    })
  })


const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedUlTag = document.body.querySelector("ul#dog-breeds");

fetch(breedUrl)
  .then(response => {
    return response.json();
  })
  .then(jsonPromise => {
    for (const key in jsonPromise.message) {
      breedUlTag.innerHTML +=  `<li> ${key}: ${jsonPromise.message[key]} </li>`
    }
  })

breedUlTag.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    let currentLITag = event.target;
    currentLITag.style.color = 'green';
  }
})

const selectTag = document.querySelector('select#breed-dropdown');

selectTag.addEventListener('change', event => {
  const searchChoice = event.target.value; //is a string

  fetch(breedUrl)
    .then(response => {
      return response.json();
    })
    .then(jsonPromise => {
      console.log("am i here yet?");
      breedUlTag .innerHTML = ""
      for (const key in jsonPromise.message) {
        if (key[0] === searchChoice) {
          breedUlTag.innerHTML += `<li> ${key}: ${jsonPromise.message[key]} </li>`
        }
      }
    })
})
