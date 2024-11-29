fetch('https://dummyjson.com/recipes/tag/Pakistani')

.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    let contenido = "";
        for (let i = 0; i < data.recipes.length; i++) {
            contenido += `
                <div class="recipe-card">
                    <img src="${recetas[i].image}" alt="${recetas[i].name}" class="recipe-image">
                    <div class="recipe-card-content"> 
                        <h1>${recetas[i].name}</h1>
                        <p>Dificultad: ${recetas[i].difficulty}</p>
                        <a href="receta.html?id=${recetas[i].id}" class="detalleHover">Detalle de la receta</a>
                    </div>
                </div>
            `;}
})

.catch(function(error){
    console.log('No pudo cargar' + error);
})
