const foodInput = document.getElementById('foodInput')
const foodSearchBtn = document.getElementById('foodSearchBtn')
const foodContainer = document.getElementById('food')
const foodTitle = document.getElementById('foodTitle')
const foodImg = document.getElementById('foodImage')
const foodList = document.getElementById('food-list')

const drinkInput = document.getElementById('drinkInput')
const drinkSearchBtn = document.getElementById('drinkSearchBtn')
const drinkContainer = document.getElementById('drink')
const drinkTitle = document.getElementById('drinkTitle')
const drinkImg = document.getElementById('drinkImage')
const drinkList = document.getElementById('drink-list')

// This function creates the URL data for the API
foodSearchBtn.addEventListener('click', function () {
    let ingredient = foodInput.value
    let foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
    requestData(foodURL)
})

// starts search and takes data to a .json format
function requestData(foodURL) {
    fetch(foodURL)
        .then((response) => response.json())
        .then((data) => displayFoodData(data));
}

// Displays an error message when searching outside API limits
function displayFoodData(data) {
    if (data.meals === null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }
    foodTitle.textContent = data.meals[0].strMeal;
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
                text: 'Something went wrong!',
              })
        })
}

// Displays Data and image from food API search
function displayDrinkData(data) {
    drinkTitle.textContent = data.drinks[0].strDrink;
    drinkImg.src = data.drinks[0].strDrinkThumb
}

// Sets search data to local storage
drinkSearchBtn.addEventListener('click', function (event) {
    const drinkName = document.getElementById("drinkInput").value;
    const drinkHistory = JSON.parse(localStorage.getItem("drinkHistory") || "[]");
    drinkHistory.push(drinkName);
    localStorage.setItem("drinkHistory", JSON.stringify(drinkHistory));
    addNewDrinkItem(drinkName)
});

foodSearchBtn.addEventListener('click', function (event) {
    const foodName = document.getElementById("foodInput").value;
    const foodHistory = JSON.parse(localStorage.getItem("foodHistory") || "[]");
    foodHistory.push(foodName);
    localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
    addNewFoodItem(foodName)
});

// Displays History in a list format
function displayDrinkLocalStorage() {
    let drinkStorage = JSON.parse(localStorage.getItem("drinkHistory"))
    if (!drinkStorage) {
        return
    } else {
        for (let i = 0; i < drinkStorage.length; i++) {
            let li = document.createElement('li')
            li.textContent = drinkStorage[i]
            drinkList.prepend(li)
        }
    }
}

function displayFoodLocalStorage() {
    let foodStorage = JSON.parse(localStorage.getItem("foodHistory"))
    if (!foodStorage) {
        return
    } else {
        for (let i = 0; i < foodStorage.length; i++) {
            let li = document.createElement('li')
            li.textContent = foodStorage[i]
            foodList.prepend(li)
        }
    }
}

// Displays History in a list format
function addNewDrinkItem(drinkName) {
    let li = document.createElement('li')
    li.textContent = drinkName
    drinkList.prepend(li)
}

function addNewFoodItem(foodName) {
    let li = document.createElement('li')
    li.textContent = foodName
    foodList.prepend(li)
}

// Local Data Remains on refresh of page
displayDrinkLocalStorage()
displayFoodLocalStorage()