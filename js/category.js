// DESPUES DE CATEGORIES, CUANDO HACE CLICK APARECE ESTO.

fetch(`https://dummyjson.com/recipes/category/${category}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("category-title").textContent = `Categoría: ${category}`;
        const container = document.getElementById("category-recipes");

        data.recipes.forEach(function(recipe) {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = 
            `
                <img src="${recipe.thumbnail}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>Dificultad: ${recipe.difficulty}</p>
                <a href="receta.html?id=${recipe.id}" class="view-details">Ver detalles</a>
            `;
            container.appendChild(recipeCard);
        });
    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });
