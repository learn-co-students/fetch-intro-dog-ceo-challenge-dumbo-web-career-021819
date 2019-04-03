
BuildDogList()
DogPics()
//Fetch dogs and create images in the #dog-image-container id
function DogPics() {
fetch('https://dog.ceo/api/breeds/image/random/4')
 .then((response) => {return response.json()}).then((values) => {
	values.message.forEach((imageURL) => {
	
		document.querySelector('#dog-image-container').innerHTML += `<img src=${imageURL} height="100" width="100"/><br>`
	})
})
}

function BuildDogList() {
    fetch('https://dog.ceo/api/breeds/list/all').then((response) => {return response.json()}).then((values)=>{let entries = Object.keys(values.message)
    	
    entries.forEach((breed) => {
    		document.querySelector('ul').innerHTML += `<li> ${breed} </li>`
   
    	})
    })
}
//When document has loaded execute the following
//it changes color of li text into red
document.addEventListener("DOMContentLoaded", function() {
document.querySelector('ul').addEventListener('click',(event) => {
	
	if (event.target.tagName == "LI") {
		event.target.innerHTML = `<span style="color: red;">${event.target.innerHTML}</span>`
	}
})

//Filters out select options
document.querySelector('#breed-dropdown').addEventListener('change',(event) => {
	let choice = event.target.value
	//find all li items that start with choice letter.
    if (choice == "all") {
   BuildDogList()
    }
    let allLi = document.querySelectorAll('li')
    
    allLi.forEach((testLi) => {
    	if  (!testLi.innerHTML.startsWith(` ${choice}`)) {
    		testLi.style.display = "none"
    		
    	}
    
    	else {
    		testLi.style.display = ""
    	}

    })

})
})

















