const dog_site = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogImgDivTag = document.querySelector('#dog-image-container')
const dogBreedUlTag = document.querySelector('#dog-breeds')
const selectFilter = document.querySelector('#breed-dropdown')
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// const alphabetOption = `<option value="${}">${}</option>`
// selectFilter.append

document.addEventListener('DOMContentLoaded', ()=>{
  fetch(dog_site)
  .then((res) => {
    return res.json()
  })
    .then((json) => {
      json.message.forEach((dog_url) => {
        let imgTag = document.createElement('img');
        imgTag.src = dog_url
        dogImgDivTag.append(imgTag)
        dogImgDivTag.append(document.createElement('br'))
      })
    })
})


document.addEventListener('DOMContentLoaded', ()=>{
  fetch(breedUrl)
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    Object.keys(json.message).forEach((breed)=>{
      let liTag = document.createElement('li')
      liTag.innerHTML = breed
      dogBreedUlTag.append(liTag)
    })
  })
})

document.addEventListener('click', (event)=>{
  document.querySelector('li')
  event.target.style.color = "#33AC21"
})

selectFilter.addEventListener('change', (event)=>{
  const selection = event.target.value
  const dogBreedAllLi = Array.from(dogBreedUlTag.children)
  dogBreedAllLi.forEach((li) => {
    if (!li.textContent.startsWith(`${selection}`)) {
	     li.style.display = "none"}
    else {
      li.style.display = ""
    }
})
})
