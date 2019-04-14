const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImgUl = document.getElementById('dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogListUl = document.getElementById("dog-breeds")
const dropDown = document.querySelector("select")

const dogPhotoListItem = (imgUrl) => {
  return `<li>
          <img src=${imgUrl} />
          </li>`
}

const createDogBreedListItem = (breed) => {
  return `<li>
          ${breed}
          </li>`
}


fetch(imgUrl)
  .then((response) => {
    return response.json()
  }).then((object) => {
    object.message.forEach((dogImg) => {
      dogImgUl.innerHTML += dogPhotoListItem(dogImg)
    })
  })

  fetch(breedUrl)
    .then((response) => {
      return response.json()
    }).then((object) => {
      let breedArray = Object.keys(object.message)
      breedArray.forEach((dogBreed) => {
        dogListUl.innerHTML += createDogBreedListItem(dogBreed)
      })
    });


  dogListUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      let currentButtonTag = event.target;
      currentButtonTag.style.color = 'pink';
    }
  })

  // document.addEventListener('change', (event) => {
  //   dogListUl.innerHTML = ''
  //   let usersOption = event.target.value
  //     fetch(breedUrl)
  //       .then((response) => {
  //         return response.json()
  //       }).then((object) => {
  //         let messageValues = Object.values(object)[1]
  //         let breedKeys = Object.keys(messageValues)
  //         breedKeys.forEach((breed) => {
  //           if (breed.startsWith(usersOption)) {
  //             dogListUl.innerHTML += createDogBreedListItem(breed)}
  //         })
  //       })
  //     }
  //   )

  document.addEventListener('change', (event) => {
    dogListUl.innerHTML = ''

    let usersOption = event.target.value

    fetch(breedUrl)
      .then((response) => {
        return response.json()
      }).then((object) => {
        let breedArray = Object.keys(object.message)
        breedArray.forEach((dogBreed) => {
          if (dogBreed.startsWith(usersOption)) {
            dogListUl.innerHTML += createDogBreedListItem(dogBreed)}
        })
      })
    })
