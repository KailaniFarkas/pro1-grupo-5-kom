let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultado = queryStringObj.get('buscador');
console.log("resultado: ",resultado);

let url = `https://dummyjson.com/recipes/search?q=${resultado}`;
console.log("url: ", url);

let listaRecetas = document.querySelector(".resultados");
let tituloBuscador = document.querySelector("#titulo-resultados");

tituloBuscador.innerText = `Resultados de busqueda para: ${resultado}`;

    fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let recetas = data.recipes;
        let contenido ="";
        console.log("recetas: ", JSON.stringify(recetas,null,4));
        
        for (let i = 0; i<recetas.length; i++){
            contenido +=`
            <div class="recipe-card">
                <img src="${recetas[i].image || 'ruta/de/imagen/por/defecto.jpg'}" alt="${recetas[i].name}" class="recipe-card-img">
                <div class="recipe-card-content"> 
                    <h1>${recetas[i].name}</h1>
                    <p>Dificultad: ${recetas[i].difficulty}</p>
                    <a href="receta.html?id=${recetas[i].id}" class="detalleHover"> Detalle de la receta </a>
                </div>
            </div>
            `
        }

        listaRecetas.innerHTML = contenido;
    })

    .catch(function(error){
        console.log("error: ", error);
    })