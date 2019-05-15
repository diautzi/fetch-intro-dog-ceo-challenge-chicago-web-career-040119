// console.log('%c HI', 'color: firebrick')

function fetchImageDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
      json.message.forEach(dog => {
        const container = document.getElementById("dog-image-container")
        let picture = document.createElement("img")
        picture.src = dog
        document.querySelector("#dog-image-container").appendChild(picture)
      });
    });
}

fetchImageDogs();


function fetchBreedDogs() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
       for (breed in json.message) {
        let breedContainer = document.getElementById("dog-breeds")
        if(breed !== undefined) {
        let breedElement = document.createElement("li")
        breedElement.textContent = breed
        breedContainer.appendChild(breedElement)}
        // debugger
         breedContainer.addEventListener("click", changeColor)
      }
    })
}

fetchBreedDogs();

function changeColor(event) {
  event.target.style.color = "green"
}

function handleDropDown(event){
  fetchBreedDogs(event.target.value)
}
