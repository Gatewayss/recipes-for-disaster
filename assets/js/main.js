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

let spirit = "gin"
let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit
const drinkContainer =document.getElementById('drink')
console.log(drinkURL);

requestData(drinkURL)
function requestData(drinkURL) {
    fetch(drinkURL)
        .then((response) => response.json())
        .then((data) => displayDrinkData(data));
}

function displayDrinkData(data) {
    console.log(data.drinks[0].strDrink);
    console.log(data.drinks[0].strDrinkThumb)
}

