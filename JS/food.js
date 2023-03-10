var apiKey = '1';
var searchBtn = $('#food-search')
var resultsContainerEl = $('#results-container');

$(function recipeFinder() {
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
    })

    function printResults(resultObj) {
        var displayCard = document.createElement('div');
        displayCard.classList.add('slides');
        console.log(resultObj);

        for (let i = 0; i < resultObj.meals.length; i++) {
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
        resultsContainerEl.append(displayCard);
        $('img').wrap("<a></a>");
        $('a').attr('href', 'https://www.themealdb.com/meal/');
        $('a').attr('target', '_blank');

        var hrefUrls = $('a');
        console.log(hrefUrls.length);
        var oldUrl = $(hrefUrls).attr('href');

        for (n = 0; n < hrefUrls.length; n++) {
            var newUrl = oldUrl + resultObj.meals[n].idMeal;
            var urlCount = hrefUrls[n];
            $(urlCount).attr('href', newUrl);
        }

        //comment out lines 63 to 91 to revert to MVP
        var carouselIndex = 1;
        showCarousel(carouselIndex);

        function plusIndex(n) {
            showCarousel(carouselIndex += n)
        }

        function showCarousel(n) {
            var i;
            var slides = $('.meal');
            if (n > slides.length) {carouselIndex = 1};
            if (n < 1) {carouselIndex = slides.length};
            for (i =0; i < slides.length; i++) {
                $('.meal').css('display', 'none');
            }
            slides[carouselIndex-1].style.display = "block"
        }

        var prevBtn = document.createElement('a');
        var nextBtn = document.createElement('a');
        prevBtn.classList.add('prev')
        nextBtn.classList.add('next')
        prevBtn.textContent = '&#12298;';
        nextBtn.textContent = '&#12299;';
        $('.prev').on('click', plusIndex(-1));
        $('.next').on('click', plusIndex(1))

        displayCard.append(prevBtn)
        displayCard.append(nextBtn)
    }
})