let qs = location.search;
const urlParams = new URLSearchParams(location.search);
const recipeId = urlParams.get("id");

/*

caloriesPerServing
: 
300
cookTimeMinutes
: 
15
cuisine
: 
"Italian"
difficulty
: 
"Easy"
id
: 
1
image
: 
"https://cdn.dummyjson.com/recipe-images/1.webp"
ingredients
: 
(6) ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste']
instructions
: 
(6) ['Preheat the oven to 475°F (245°C).', 'Roll out the pizza dough and spread tomato sauce evenly.', 'Top with slices of fresh mozzarella and fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.', 'Slice and serve hot.']
mealType
: 
['Dinner']
name
: 
"Classic Margherita Pizza"
prepTimeMinutes
: 
20
rating
: 
4.6
reviewCount
: 
98
servings
: 
4
tags
: 
(2) ['Pizza', 'Italian']
userId
: 
166
*/

function fetchRecipe() {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderRecipe(data);
    }).catch(function (error) {
        console.log(`el error es ${error}`);
    })
} // corregir


function renderRecipe(recipe) {
    document.querySelector("#recipe-title").textContent = recipe.name;
    document.querySelector("#recipe-image").src = recipe.image;
    document.querySelector("#recipe-instructions").textContent = recipe.instructions;
    document.querySelector("#recipe-cooking-time").textContent = recipe.cookTimeMinutes + " minutos";
    const categoriesContainer = document.querySelector("#recipe-categories");

    let contenido = ""
    for (let i = 0; i < recipe.tags.length; i++) {
        contenido += `
            ${recipe.tags[i]} 
        `
    }
    categoriesContainer.textContent = contenido;
}

fetchRecipe();
