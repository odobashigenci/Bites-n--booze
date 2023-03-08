var hungryBtn = document.getElementById("hungry")
var thirstyBtn = document.getElementById("thirsty")



hungryBtn.addEventListener("click", () => {
    window.location.assign("food.html");
})

thirstyBtn.addEventListener("click", () => {
    window.location.assign("drink.html");
})