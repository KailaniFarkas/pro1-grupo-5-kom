let query_s = location.search;
let object = new URLSearchParams(query_s);
let id_receta = object.get("id");

let recetas_container = document.querySelector(".receta-index");
let URL = `https://dummyjson.com/recipes`;

if (id_receta) {
    fetch(`${URL}/${id_receta}`)
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
            recetas_container.innerHTML = recetaHTML;
        })
        .catch(function (error) {
            console.error("Error al cargar la receta:", error);
            recetas_container.innerHTML = `<p>Error al cargar la receta.</p>`;
        });
} else {

    let recetas_mostradas = 0;
    const recetas_por_pagina = 10;

    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recetas = data.recipes;

            function cargarMasRecetas() {
                let recetasHTML = "";
                for (let i = recetas_mostradas; i < recetas_mostradas + recetas_por_pagina && i < recetas.length; i++) {
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
                recetas_container.innerHTML += recetasHTML;
                recetas_mostradas += recetas_por_pagina;

                if (recetas_mostradas >= recetas.length) {
                    document.querySelector("#load-more").style.display = "none";
                }
            }

            document.querySelector("#load-more").addEventListener("click", cargarMasRecetas);
            cargarMasRecetas();
        })
        .catch(function (error) {
            console.error("Error al cargar las recetas:", error);
            recetas_container.innerHTML = `<p>Error al cargar las recetas.</p>`;
        });
}
