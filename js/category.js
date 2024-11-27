const categoryRecipesSection = document.querySelector(".recipes-list");
const categoryTitle = document.getElementById("category-title");

// Obtener el parámetro "tag" desde la URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("tag");

let recipesHTML = "";

// Verificar si se especificó una categoría
if (category) {
    const API_URL = `https://dummyjson.com/recipes/tag/${category}`;

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error("Error al conectar con la API");
            return response.json();
        })
        .then(function (data) {
            console.log("Recetas recibidas:", data);

            // Mostrar la categoría en el título
            categoryTitle.textContent = `Recetas para la categoría: ${category}`;

            // Verificar si hay recetas disponibles
            if (data.recipes && data.recipes.length > 0) {
                data.recipes.forEach(function (recipe) {
                    recipesHTML += `
                        <div class="recipe-card">
                            <img src="${recipe.image || 'ruta/de/imagen/por/defecto.jpg'}" alt="${recipe.name}" class="recipe-card-img">
                            <div class="recipe-card-content">
                                <h1>${recipe.name}</h1>
                                <p>Dificultad: ${recipe.difficulty}</p>
                                <a href="./index.html?id=${recipe.id}" class="detalleHover">Detalle de la receta</a>
                            </div>
                        </div>
                    `;
                });
            } else {
                recipesHTML = "<p>No se encontraron recetas en esta categoría.</p>";
            }

            // Insertar las recetas en el contenedor
            categoryRecipesSection.innerHTML = recipesHTML;
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
            categoryRecipesSection.innerHTML = "<p>Error al cargar las recetas. Por favor, intenta más tarde.</p>";
        });
} else {
    // Si no se especifica una categoría, mostrar un mensaje
    categoryTitle.textContent = "Categoría no especificada";
    categoryRecipesSection.innerHTML = "<p>Por favor, selecciona una categoría válida.</p>";
}
