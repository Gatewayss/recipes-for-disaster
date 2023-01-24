let ingredient = "egg"
let foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
const foodContainer = document.getElementById('food')

requestData(foodURL)
function requestData(foodURL) {
    fetch(foodURL)
        .then((response) => response.json())
        .then((data) => displayFoodData(data));
}

function displayFoodData(data) {
    console.log(data.meals[0].strMeal);
    console.log(data.meals[0].strMealThumb)
}


