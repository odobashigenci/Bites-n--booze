var apiKey = '1'
var searchBtn = $('#food-search')
var resultsContainerEl = $('#results-container');

$(function recipeFinder() {
    searchBtn.click(function (e) {
        e.preventDefault
        var ingredient = $('input[type=search]').val();
        var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient;
        console.log(apiUrl)

        fetch(apiUrl).then(function (results) {
            return results.json();
        }).then(function (recipe) {
            printResults(recipe);
            console.log(recipe);
        })
    })

    function printResults(resultObj) {
        var displayCard = document.createElement('div');
        console.log(resultObj)

        for (let i = 0; i < resultObj.meals.length; i++) {
            var meal = resultObj.meals[i];
            var mealImgUrl = meal.strMealThumb;
            console.log(mealImgUrl);

            var displayBody = document.createElement('div');
            displayCard.append(displayBody);

            var mealImg = document.createElement('img');
            mealImg.classList.add('meal-img');
            mealImg.src = mealImgUrl;

            displayBody.append(mealImg);
        }
        resultsContainerEl.append(displayCard);
        $('img').wrap("<a></a>")
        $('a').attr('href', 'https://www.themealdb.com/meal/')

        var hrefUrls = $('a')
        console.log(hrefUrls.length)
        var oldUrl = $(hrefUrls).attr('href')
        console.log(oldUrl)


        for (n = 0; n < hrefUrls.length; n++) {
            var newUrl = oldUrl + resultObj.meals[n].idMeal;
            var urlCount = hrefUrls[n]
            $(urlCount).attr('href', newUrl)
        }
    }
})