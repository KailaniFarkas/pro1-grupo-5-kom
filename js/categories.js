const categorias_section = document.querySelector(".categorias");
const URL = 'https://dummyjson.com/recipes/tags';

let categoria_mas = "";

// llamamos a la API
fetch(URL)
    .then(function (response) {
        if (!response.ok) throw new Error("Error al conectar con la API");
        return response.json();
    })
    .then(function (tags) {
        console.log("Categorías recibidas:", tags);

        tags.forEach(function (tag) {
            for (let i in tags) {
                const tag = tags[i]; // accedemos a cada categoría
                categoria_mas += `
                    <article class="category">
                        <a href="./category.html?tag=${tag}" class="category-link">${tag}</a>
                    </article>
                `;
            }
        });

        categorias_section.innerHTML = categoria_mas;

        const category_elements = document.querySelectorAll(".category-link");
        category_elements.forEach(function (category) {
            category.addEventListener("mouseover", function () {
                category.style.text_decoration = "underline";
            });
            category.addEventListener("mouseout", function () {
                category.style.text_decoration = "none";
            });
        });
    })
    .catch(function (error) {
        console.error("Error al obtener las categorías:", error);
        categorias_section.innerHTML = "<p>Error al cargar las categorías. Intenta más tarde.</p>";
    });
