const images = [
    {
        image: './imgs/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './imgs/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './imgs/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './imgs/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './imgs/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const carouselElement = document.querySelector("div.carousel");

let ActiveIndex = 1; 

images.forEach((imgElement, index) => {
    
    carouselElement.innerHTML +=

    `  <div class="carousel-img">
                
    <img src="${imgElement.image}" alt="Carousel image">

    </div>
`





})



const preButton = document.querySelector("button.prev");
preButton.addEventListener("click", function(){
  if(ActiveIndex == 0) {
    ActiveIndex = images.length - 1; 
   
  } else {
    ActiveIndex = ActiveIndex - 1;
  } 

  document.querySelector("div.carousel div.carousel-img img.active").classList.remove("active");
  document.querySelector("div.carousel div.carousel-img img")[ActiveIndex].classList.add("active");
 


})

const nextButton = document.querySelector("button.next");
nextButton.addEventListener("click", function(){
  if(ActiveIndex == images.length - 1) {
    ActiveIndex = 0; 
   
  } else {
    ActiveIndex = ActiveIndex + 1;
  } 

  document.querySelector("div.carousel div.carousel-img img.active").classList.remove("active");
  document.querySelector("div.carousel div.carousel-img img")[ActiveIndex].classList.add("active");
 


})


