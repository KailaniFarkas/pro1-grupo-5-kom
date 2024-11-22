// Obtener el ID de la receta desde la URL
let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idreceta = qsobj.get("id");

// Seleccionar la sección donde se mostrarán las recetas
let recetasContainer = document.querySelector(".receta-index");
let URL = `https://dummyjson.com/recipes`;

// Verificar si se cargará una receta específica o la lista
if (idreceta) {
    // Si hay un ID en la URL, cargar los detalles de una receta específica
    fetch(`${URL}/${idreceta}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recetaHTML = `
                <article class="article">
                    <div class="artIMAGEN">
                        <img src="${data.image || 'ruta/de/imagen/por/defecto.jpg'}" alt="${data.name}" class="imagen">
                    </div>
                    <div class="artTEXTO">
                        <h1 class="titulo">${data.name}</h1>
                        <p class="instrucciones">${data.instructions}</p>
                        <p class="coc">Tiempo de cocción: ${data.prepTimeMinutes || 'N/A'} minutos</p>
                        <div class="categorias">
                            ${data.tags.map(tag => `<a href="./categories.html?tag=${tag}" class="categoria">${tag}</a>`).join(", ")}
                        </div>
                    </div>
                </article>
            `;
            recetasContainer.innerHTML = recetaHTML;
        })
        .catch(function (error) {
            console.error("Error al cargar la receta:", error);
            recetasContainer.innerHTML = `<p>Error al cargar la receta.</p>`;
        });
} else {
    // Si no hay un ID, cargar la lista de recetas
    let recetasMostradas = 0;
    const recetasPorPagina = 10;

    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recetas = data.recipes;

            function cargarMasRecetas() {
                let recetasHTML = "";
                for (let i = recetasMostradas; i < recetasMostradas + recetasPorPagina && i < recetas.length; i++) {
                    recetasHTML += `
                        <div class="recipe-card">
                            <img src="${recetas[i].image || 'ruta/de/imagen/por/defecto.jpg'}" alt="${recetas[i].name}" class="recipe-card-img">
                            <div class="recipe-card-content"> 
                                <h1>${recetas[i].name}</h1>
                                <p>Dificultad: ${recetas[i].difficulty}</p>
                                <a href="?id=${recetas[i].id}" class="detalleHover">Detalle de la receta</a>
                            </div>
                        </div>
                    `;
                }
                recetasContainer.innerHTML += recetasHTML;
                recetasMostradas += recetasPorPagina;

                if (recetasMostradas >= recetas.length) {
                    document.querySelector("#load-more").style.display = "none";
                }
            }

            document.querySelector("#load-more").addEventListener("click", cargarMasRecetas);
            cargarMasRecetas();
        })
        .catch(function (error) {
            console.error("Error al cargar las recetas:", error);
            recetasContainer.innerHTML = `<p>Error al cargar las recetas.</p>`;
        });
}
