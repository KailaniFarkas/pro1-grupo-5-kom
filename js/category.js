const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

function fetchCategoryRecipes() {
    fetch(`https://dummyjson.com/recipes/category/${category}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("category-title").textContent = `Categoría: ${category}`;
            renderRecipes(data.recipes);
        });
}

function renderRecipes(recipes) {
    const container = document.getElementById("category-recipes");
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.thumbnail}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Dificultad: ${recipe.difficulty}</p>
            <a href="receta.html?id=${recipe.id}" class="view-details">Ver detalles</a>
        `;
        container.appendChild(recipeCard);
    });
}

fetchCategoryRecipes();
