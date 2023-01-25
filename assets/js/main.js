const foodInput = document.getElementById('foodInput')
const foodSearchBtn = document.getElementById('foodSearchBtn')
const foodContainer = document.getElementById('food')
const foodTitle = document.getElementById('foodTitle')
const drinkInput = document.getElementById('drinkInput')
const drinkSearchBtn = document.getElementById('drinkSearchBtn')
const drinkContainer =document.getElementById('drink')
const drinkTitle = document.getElementById('drinkTitle')

drinkSearchBtn.addEventListener('click', function () {
    let spirit = drinkInput.value
    let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit
    requestDrinkData(drinkURL)
})

function requestDrinkData(drinkURL) {
    fetch(drinkURL)
        .then((response) => response.json())
        .then((data) => displayDrinkData(data));
}

function displayDrinkData(data) {
    drinkTitle.textContent= data.drinks[0].strDrink;
    console.log(data.drinks[0].strDrinkThumb)
}

foodSearchBtn.addEventListener('click', function () {
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
    foodTitle.textContent= data.meals[0].strMeal;
    console.log(data.meals[0].strMealThumb)
}
