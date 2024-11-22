fetch('https://dummyjson.com/recipes/search?q=Margherita')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const container = document.getElementById("recipes-container"); // Asegúrate de tener un contenedor en tu HTML con este ID
        data.recipes.forEach(function(recipe) {
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
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
