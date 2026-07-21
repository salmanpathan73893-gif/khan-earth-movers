// KHAN EARTH MOVERS

const search = document.querySelector(".search input");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});


// Smooth Scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
