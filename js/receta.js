let qs = location.search;
const urlParams = new URLSearchParams(location.search);
const recipeId = urlParams.get("tag");


function fetchRecipe() {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        









    }).catch(function (error) {
        console.log(`el error es ${error}`);
        
    })
    
        
} // corregir


function renderRecipe(recipe) {
    document.getElementById("recipe-title").textContent = recipe.name;
    document.getElementById("recipe-image").src = recipe.thumbnail;
    document.getElementById("recipe-instructions").textContent = recipe.instructions;
    document.getElementById("recipe-cooking-time").textContent = recipe.cookingTime + " minutos";

    const categoriesContainer = document.getElementById("recipe-categories");
    recipe.category.forEach((category) => { //corregir
        const categoryLink = document.createElement("a");
        categoryLink.href = `category.html?category=${category}`;
        categoryLink.textContent = category;
        categoriesContainer.appendChild(categoryLink);
    });
}

fetchRecipe();
