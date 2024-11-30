const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);
const categoria = queryStringObj.get('category-recipes');
const url = `https://dummyjson.com/recipes/tag/${categoria}`
const listaRecetas = document.querySelector(".lista-recetas");


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let contenido = "";
        for (let i = 0; i < data.recipes.length; i++) {
            contenido += `
                <div class="recipe-card">
                    <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}" class="recipe-image">
                    <div class="recipe-card-content"> 
                        <h1>${data.recipes[i].name}</h1>
                        <p>Dificultad: ${data.recipes[i].difficulty}</p>
                        <a href="receta.html?id=${data.recipes[i].id}" class="detalleHover">Detalle de la receta</a>
                    </div>
                </div>
            `;}
    listaRecetas.innerHTML = contenido;
})

.catch(function(error){
    console.log('No pudo cargar' + error);
})
