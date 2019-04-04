console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const dogImgUL = document.getElementById('dog-image-container')

const createNewDogListItem = (imageurl) => {

  return `<li>
            <img src=${imageurl} />
          </li>`

}
fetch(imgUrl)
  .then((response) => {
    return response.json()
  }).then((object) => {
    object.message.forEach((imageurl) => {
      // console.log(object.message)
      dogImgUL.innerHTML += createNewDogListItem(imageurl)
    })

  })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogBreedUL = document.getElementById('dog-breeds')

const createDogBreedListItem = (breed) => {
  return `<li>${breed}</li>`
}

fetch(breedUrl)
  .then((response) => {
    return response.json()
  }).then((object) => {
    let messageValues = Object.values(object)[1]
    let breedKeys = Object.keys(messageValues)
    breedKeys.forEach((breed) => {
      dogBreedUL.innerHTML += createDogBreedListItem(breed)
    })

  })

dogBreedUL.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    let currentButtonTag = event.target;
    currentButtonTag.style.color = 'pink';
  }
})


document.addEventListener('change', (event) => {
  dogBreedUL.innerHTML = ''
  let usersOption = event.target.value
    fetch(breedUrl)
      .then((response) => {
        return response.json()
      }).then((object) => {
        let messageValues = Object.values(object)[1]
        let breedKeys = Object.keys(messageValues)
        breedKeys.forEach((breed) => {
          if (breed.startsWith(usersOption)) {
            dogBreedUL.innerHTML += createDogBreedListItem(breed)}
        })
      })
    }
  )


// let usersOption = choices.options[choices.selectedIndex].value;
