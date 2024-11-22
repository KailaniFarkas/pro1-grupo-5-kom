fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let recetas = data.recipes;
        let listaReceta = document.querySelector(".receta-index");
        let recetasMostradas = 0;
        const recetasPorPagina = 10;

        function masRecetas() {
            let receta = "";
            for (let index = recetasMostradas; index < recetasMostradas + recetasPorPagina; index++) {
                let imageUrl = recetas[index].image || 'ruta/de/imagen/por/defecto.jpg';

                receta += `
                    <div class="recipe-card">
                        <img src="${imageUrl}" alt="Imagen de la receta" class="recipe-card-img">
                        <div class="recipe-card-content">
                            <h1>${recetas[index].name}</h1>
                            <p>Dificultad: ${recetas[index].difficulty}</p>
                            <a class="detalleHover" href="/recipes/${recetas[index].id}">Detalle de la receta</a>
                        </div>
                    </div>
                `;
            }
            listaReceta.innerHTML += receta;
            recetasMostradas += recetasPorPagina;

            if (recetasMostradas >= recetas.length) {
                botonCargarMas.style.display = "none";
            }
        }

        let botonCargarMas = document.querySelector(".cargar-mas");
        botonCargarMas.addEventListener("click", masRecetas);
        masRecetas();
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
