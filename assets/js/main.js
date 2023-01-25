const foodInput = document.getElementById('foodInput')
const foodSearchBtn = document.getElementById('searchBtn')
const foodContainer = document.getElementById('food')
const drinkContainer =document.getElementById('drink')

let spirit = "gin"
let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit


searchBtn.addEventListener('click', function () {
    let ingredient = foodInput.value
    let foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
    requestData(foodURL)
})

function requestData(foodURL) {
    fetch(foodURL)
        .then((response) => response.json())
        .then((data) => displayFoodData(data));
}

function displayFoodData(data) {
    console.log(data.meals[0].strMeal);
    console.log(data.meals[0].strMealThumb)
}

/*

function requestData(drinkURL) {
    fetch(drinkURL)
        .then((response) => response.json())
        .then((data) => displayDrinkData(data));
}

function displayDrinkData(data) {
    console.log(data.drinks[0].strDrink);
    console.log(data.drinks[0].strDrinkThumb)
}
*/