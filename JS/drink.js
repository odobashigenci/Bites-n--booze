var apiKey = "1"
var searchButton = $("#liquor-search")
var resultsContainerEl = $("#results-container")

$(function recipeFinder() {

    //setting up the submit button to render results on click
    searchButton.click(function (e) {
        e.preventDefault
        resultsContainerEl.html("")
        var ingredient = $("input[type=search]").val();
        var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
        console.log(apiUrl)

        fetch(apiUrl).then(function (results) {
            return results.json();
        }).then(function (recipe) {
            printResults(recipe);
            console.log(recipe);
        })
        $("input[type=search]").val('');
    })

    //setting up enter button to do the same function as submit button
    //and clearing the text from the search are after
    $('input[type=search]').keypress(function (e) {
        if (e.keyCode === 13) {
            searchButton.click();
            $(this).val('');
        }
    });


    //creating html elements to display results on screen
    function printResults(resultObj) {
        var displayCard = document.createElement("div")
        displayCard.classList.add('slides');
        
        for (let i = 0; i < 10; i++) {
            var drink = resultObj.drinks[i]
            var drinkImgUrl = drink.strDrinkThumb;
            console.log(drinkImgUrl)
           
            var displayBody = document.createElement("div");
            displayBody.classList.add('myDrink');
            displayCard.append(displayBody);


            var drinkImg = document.createElement("img")
            drinkImg.classList.add("drink-img");
            drinkImg.src = drinkImgUrl;
           

            var drinkCaption = document.createElement("h2");
            var drinkName = drink.strDrink;
            drinkCaption.textContent = drinkName;
            console.log(drinkName);
            displayBody.append(drinkCaption);

            displayBody.append(drinkImg);
        }

        //appending results to html elements created
        resultsContainerEl.append(displayCard)

        $("img").wrap("<a></a>")
        $("a").attr("href", "https://www.thecocktaildb.com/drink/")
        $('a').attr('target', '_blank');
        
        var hrefUrls = $("a")
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