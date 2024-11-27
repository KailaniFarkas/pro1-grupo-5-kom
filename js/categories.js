const categoriasSection = document.querySelector(".categorias");
const URL = 'https://dummyjson.com/recipes/tags';

// Variable para construir el HTML
let categoriaPlus = "";

// Llamada a la API para obtener las categorías
fetch(URL)
    .then(function (response) {
        if (!response.ok) throw new Error("Error al conectar con la API");
        return response.json();
    })
    .then(function (tags) {
        console.log("Categorías recibidas:", tags);

        // Crear HTML dinámico con las categorías
        tags.forEach(function (tag) {
            for (let i in tags) {
                const tag = tags[i]; // Accedemos a cada categoría
                categoriaPlus += `
                    <article class="category">
                        <a href="./category.html?tag=${tag}" class="category-link">${tag}</a>
                    </article>
                `;
            }
        });

        // Insertar el HTML en el contenedor
        categoriasSection.innerHTML = categoriaPlus;

        // Agregar eventos a las categorías (opcional, ejemplo para animaciones)
        const categoryElements = document.querySelectorAll(".category-link");
        categoryElements.forEach(function (category) {
            category.addEventListener("mouseover", function () {
                category.style.textDecoration = "underline";
            });
            category.addEventListener("mouseout", function () {
                category.style.textDecoration = "none";
            });
        });
    })
    .catch(function (error) {
        console.error("Error al obtener las categorías:", error);
        categoriasSection.innerHTML = "<p>Error al cargar las categorías. Intenta más tarde.</p>";
    });
