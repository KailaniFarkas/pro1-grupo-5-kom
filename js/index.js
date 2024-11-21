fetch('https://dummyjson.com/recipes')
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data);
    let recetas = data.recipes;
    let listaRecesta = document.querySelector(".receta-index");
    let recetasMostradas = 0;
    const recetasPorPagina = 10;

    function masRecetas(){
        let receta = "";
        for (let index = recetasMostradas; index < recetasMostradas + recetasPorPagina; index++) {
            if (index >= recetas.length);

            receta += `
                <article class= "cadaUna">
                    <img src=${$recetas[index].image} alt "Imagen de las recetas"></img>
                    <h1>${recetas[index].name}</h1>
                    <p>${"dificultad: "}${recetas[index].difficulty}</p>
                    <a class="detalleHover" href= "/recipes/${recetas[index].id}">Detalle de la receta</a>
                </article>
            `;
            
            
        }    
        listaRecesta.innerHTML += recetas;
        recetasMostradas += recetasPorPagina;

        if (recetasMostradas >= recetas.length) {
            botonCargarMas.style.display = "none"
        }
    }
    let botonCargarMas = document.querySelector(".cargar-mas")
    botonCargarMas.addEventListener("click", masRecetas);
    masRecetas();
})

.catch(function (error) {
    console.log("Error:", error);
});

