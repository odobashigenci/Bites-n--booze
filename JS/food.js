var apiKey = '1';
var searchBtn = $('#food-search')
var resultsContainerEl = $('#results-container');

$(function recipeFinder() {
    
    //setting up the submit button to render results on click
    searchBtn.click(function (e) {
        e.preventDefault;
        resultsContainerEl.html('');
        var ingredient = $('input[type=search]').val();
        var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient;
        console.log(apiUrl);

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
            searchBtn.click();
            $(this).val('');
        }
    });

    //creating html elements to display results on screen
    function printResults(resultObj) {
        var displayCard = document.createElement('div');
        displayCard.classList.add('slides');
        console.log(resultObj.meals);
        var modalEl = $('#modal')
        function modalReveal() {
            modalEl.addClass('is-active')
        }

        $('#close').click(function () {
            console.log('click')
                $('#modal').removeClass('is-active');
        });

        $('#close-window').click(function () {
            console.log('click')
                $('#modal').removeClass('is-active');
        });

            if (resultObj.meals === null) {
                modalReveal()
            } else {
                for (let i = 0; i < resultObj.meals.length; i++) {
                    console.log(resultObj.meals)

                    var meal = resultObj.meals[i];
                    var mealImgUrl = meal.strMealThumb;
                    console.log(mealImgUrl);

                    var displayBody = document.createElement('div');
                    displayBody.classList.add('meal')
                    displayCard.append(displayBody);

                    var mealImg = document.createElement('img');
                    mealImg.classList.add('meal-img');
                    mealImg.src = mealImgUrl;

                    var mealCaption = document.createElement('h2');
                    var mealName = meal.strMeal;
                    mealCaption.textContent = mealName;
                    console.log(mealName);

                    displayBody.append(mealCaption);
                    displayBody.append(mealImg);
                }
            }
            //appending results to html elements created
            resultsContainerEl.append(displayCard);
            $('img').wrap("<a class='resultImgs'></a>");
            $('a[class=resultImgs]').attr('href', 'https://www.themealdb.com/meal/');
            $('a[class=resultImgs]').attr('target', '_blank');

            var hrefUrls = $('a');
            console.log(hrefUrls.length);
            var oldUrl = $(hrefUrls).attr('href');

            for (n = 0; n < resultObj.meals.length; n++) {
                var meal = resultObj.meals[n];
                var newUrl = oldUrl + meal.idMeal;
                var urlCount = hrefUrls[n];
                $(urlCount).attr('href', newUrl);
            }


        }
})