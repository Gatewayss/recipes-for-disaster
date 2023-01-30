const foodInput = document.getElementById('foodInput')
const foodSearchBtn = document.getElementById('foodSearchBtn')
const foodContainer = document.getElementById('food')
const foodTitle = document.getElementById('foodTitle')
const foodImg = document.getElementById('foodImage')

const drinkInput = document.getElementById('drinkInput')
const drinkSearchBtn = document.getElementById('drinkSearchBtn')
const drinkContainer =document.getElementById('drink')
const drinkTitle = document.getElementById('drinkTitle')
const drinkImg = document.getElementById('drinkImage')

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
    if (data.meals === null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again!',
          })
     }
    foodTitle.textContent= data.meals[0].strMeal;
    foodImg.src = data.meals[0].strMealThumb
}

drinkSearchBtn.addEventListener('click', function () {
    let spirit = drinkInput.value
    let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit
    requestDrinkData(drinkURL)
})

function requestDrinkData(drinkURL) {
    fetch(drinkURL)
        .then((response) => response?.json())
        .then((data) => displayDrinkData(data))
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again!',
              })
        })
        
}

function displayDrinkData(data) {
    drinkTitle.textContent = data.drinks[0].strDrink;
    drinkImg.src = data.drinks[0].strDrinkThumb
}

drinkSearchBtn.addEventListener('click', function (event) {
    const drinkName = document.getElementById("drinkInput").value;

  
    const drinkHistory = JSON.parse(localStorage.getItem("drinkHistory") || "[]");

    drinkHistory.push({drinkName});

    localStorage.setItem("drinkHistory", JSON.stringify(drinkHistory));
});

foodSearchBtn.addEventListener('click', function (event) {
    const foodName = document.getElementById("foodInput").value;

  
    const foodHistory = JSON.parse(localStorage.getItem("foodHistory") || "[]");

    foodHistory.push({foodName});

    localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
});
