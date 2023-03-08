


var apiKey = "1"
var searchButton = $("#liquor-search")
var resultsContainerEl = $("#results-container")

$(function recipeFinder(){
    searchButton.click(function(e) {
        e.preventDefault
        resultsContainerEl.html("")
        var ingredient = $("input[type=search]").val();
        var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
        console.log(apiUrl)

        fetch(apiUrl).then(function (results){
            return results.json();
        }).then(function (recipe) {
            printResults(recipe);
            console.log(recipe);
        })
    })
    function printResults(resultObj){
        var displayCard = document.createElement("div")
        console.log(resultObj)

        for (let i = 0; i < 10; i++) {
            var drink = resultObj.drinks[i]
            var drinkImgUrl = drink.strDrinkThumb;
            console.log(drinkImgUrl)

            var displayBody = document.createElement("div");
            displayCard.append(displayBody);

            
            var drinkImg = document.createElement("img")
            drinkImg.classList.add("drink-img");
            drinkImg.src = drinkImgUrl;

            displayBody.append(drinkImg);
        }

        resultsContainerEl.append(displayCard)

        $("img").wrap("<a></a>")
        $("a").attr("href", "https://www.thecocktaildb.com/drink/")

        var hrefUrls= $("a")
        console.log(hrefUrls.length)
        var oldUrl = $(hrefUrls).attr("href")
        console.log(oldUrl)


        for (n = 0; n < hrefUrls.length; n++) {
        var newUrl = oldUrl + resultObj.drinks[n].idDrink;
        var urlCount = hrefUrls[n]
        $(urlCount).attr("href", newUrl)
        }

    }
})