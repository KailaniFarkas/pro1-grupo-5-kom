const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get("id");

function fetchRecipe() {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
        .then((response) => response.json())
        .then((data) => renderRecipe(data));
}

function renderRecipe(recipe) {
    document.getElementById("recipe-title").textContent = recipe.name;
    document.getElementById("recipe-image").src = recipe.thumbnail;
    document.getElementById("recipe-instructions").textContent = recipe.instructions;
    document.getElementById("recipe-cooking-time").textContent = recipe.cookingTime + " minutos";

    const categoriesContainer = document.getElementById("recipe-categories");
    recipe.category.forEach((category) => {
        const categoryLink = document.createElement("a");
        categoryLink.href = `category.html?category=${category}`;
        categoryLink.textContent = category;
        categoriesContainer.appendChild(categoryLink);
    });
}

fetchRecipe();
