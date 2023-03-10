var hungryBtn = document.getElementById("hungry")
var thirstyBtn = document.getElementById("thirsty")



hungryBtn.addEventListener("click", () => {
    window.location.assign("food.html");
})

thirstyBtn.addEventListener("click", () => {
    window.location.assign("drink.html");
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


