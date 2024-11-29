const category_recipes_section = document.querySelector(".recipes-list");
const category_title = document.getElementById("category-title");

// parámetro "tag" desde el link
const url_params = new URLSearchParams(window.location.search);
const category = url_params.get("tag");

let recipesHTML = "";

// verificar si se especificó una categoría
if (category) {
    const API_URL = `https://dummyjson.com/recipes/tag/${category}`;

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error("Error al conectar con la API");
            return response.json();
        })
        .then(function (data) {
            console.log("Recetas recibidas:", data);

            // mostrar la categoría en el título
            category_title.textContent = `Recetas para la categoría: ${category}`;

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

            // agregar las recetas
            category_recipes_section.innerHTML = recipesHTML;
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
            category_recipes_section.innerHTML = "<p>Error al cargar las recetas. Por favor, intenta más tarde.</p>";
        });
} else {
    category_title.textContent = "Categoría no especificada";
    category_recipes_section.innerHTML = "<p>Por favor, selecciona una categoría válida.</p>";
}
