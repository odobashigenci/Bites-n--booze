var hungryBtn = document.getElementById("hungry")
var thirstyBtn = document.getElementById("thirsty")
//quick dish btns
var sushiBtn = document.getElementById("sushi")
var fettuccineBtn = document.getElementById("fettuccine")
var chivitoBtn = document.getElementById("chivito")
var stewBtn = document.getElementById("stew")
//quick drink btns
var daiquiriBtn = document.getElementById("daiquiri")
var margaritaBtn = document.getElementById("margarita")
var mojitoBtn = document.getElementById("mojito")
var negroniBtn = document.getElementById("negroni")

//setting up the buttons to direct to next page to click
hungryBtn.addEventListener("click", () => {
    window.location.assign("food.html");
})

thirstyBtn.addEventListener("click", () => {
    window.location.assign("drink.html");
})

// quick dishes sidebar event listeners
sushiBtn.addEventListener("click", () => {
    window.location.assign("https://www.themealdb.com/meal/53065-Sushi-Recipe")
})

fettuccineBtn.addEventListener("click", () => {
  window.location.assign("https://www.themealdb.com/meal/53064-Fettuccine-Alfredo-Recipe")
})

chivitoBtn.addEventListener("click", () => {
  window.location.assign("https://www.themealdb.com/meal/53063-Chivito-uruguayo-Recipe")
})

stewBtn.addEventListener("click", () => {
  window.location.assign("https://www.themealdb.com/meal/53058-Croatian-Bean-Stew-Recipe")
})

// quick drinks sidebar event listeners
daiquiriBtn.addEventListener("click", () => {
  window.location.assign("https://www.thecocktaildb.com/drink/11006-Daiquiri-Cocktail")
})

margaritaBtn.addEventListener("click", () => {
window.location.assign("https://www.thecocktaildb.com/drink/11007-Margarita-Cocktail")
})

mojitoBtn.addEventListener("click", () => {
window.location.assign("https://www.thecocktaildb.com/drink/11000-Mojito-Cocktail")
})

negroniBtn.addEventListener("click", () => {
window.location.assign("https://www.thecocktaildb.com/drink/11003-Negroni-Cocktail")
})

// setting up the navbar drop down menu (burger)
$(document).ready(function() {
    $('.navbar-burger').click(function() {
      $('#navbarBasicExample').toggleClass('is-active');
    });
  });

// setting up the read more drop down 
function toggle() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";
    }
  }


