console.log('%c HI', 'color: firebrick')
const dropdown = document.querySelector('#breed-dropdown');
const dogImageDiv = document.querySelector('#dog-image-container');
const dogBreedsUl = document.querySelector('#dog-breeds');
const submitButton = document.querySelector('#submit');

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    json.message.forEach(function(url){
      let img = document.createElement('IMG');
      img.src = url;
      img.height = 400;
      img.width = 400;
      dogImageDiv.append(img);
    });
  });

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    let breeds = Object.keys(json.message);
    breeds.forEach(function(breed){
      let li = document.createElement('LI');
      li.innerText = breed;
      dogBreedsUl.append(li);
      li.addEventListener('click', function(){
          li.style.color = 'green';
      });
    });
  });

let selected_index = dropdown[dropdown.selectedIndex].innerText;

dropdown.addEventListener('change', function(){
  
  let selected_index = dropdown[dropdown.selectedIndex].innerText;
  let allLIs = dogBreedsUl.querySelectorAll('LI');

  for (let i=0; i<allLIs.length ; i++) {
    if (allLIs[i].innerText.startsWith(selected_index) != true) {
      allLIs[i].style.display = 'none';
    } else {
      allLIs[i].style.display = ''
    };
  };

});

  /*
  allLIs.forEach(li, function(){
    if (allLIs[0].innerText.startsWith(selected_index) != true) {
        li.style.display = 'none';
    }
  });
  */
