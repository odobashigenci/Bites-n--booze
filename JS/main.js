var hungryBtn = document.getElementById("hungry")
var thirstyBtn = document.getElementById("thirsty")



hungryBtn.addEventListener("click", () => {
    window.location.href("food.js");
})

thirstyBtn.addEventListener("click", () => {
    window.location.href("drink.js");
})