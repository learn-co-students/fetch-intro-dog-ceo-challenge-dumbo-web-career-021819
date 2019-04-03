console.log('%c HI', 'color: firebrick')

const dogCont = document.getElementById('dog-image-container')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(images => images.message)
.then(imgArray => imgArray.forEach (image => dogCont.innerHTML += `<img src='${image}'>`))

const ulTag = document.getElementById('dog-breeds')
const breedsURL = 'https://dog.ceo/api/breeds/list/all'

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(json => json.message)
.then(breeds => Object.keys(breeds))
.then(breeds => breeds.forEach (breed => ulTag.innerHTML += `<li>${breed}</li>`))

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red'
    }
})

document.addEventListener('change', function(e) {
    ulTag.innerHTML = ''
	fetch('https://dog.ceo/api/breeds/list/all')
	.then(resp => resp.json())
	.then(json => json.message)
	.then(breeds => Object.keys(breeds))
	.then(breeds => breeds.forEach (breed => {
        if (breed.startsWith(e.target.value)) {
            ulTag.innerHTML += `<li>${breed}</li>`}}))})