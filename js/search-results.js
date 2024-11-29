let buscar_params = new URLSearchParams(location.search);
let buscar_query = buscar_params.get('buscar');

let recipes_container = document.getElementById('recipes-container');
let loader = document.createElement('div');
loader.id = 'loader';
loader.innerText = 'Cargando recetas...';
document.body.appendChild(loader);

loader.style.display = 'block';

// cambiar el título si hay búsqueda
if (buscar_query) {
  let title = document.createElement('h1');
  title.className = "titulobusqueda";
  title.innerText = `Resultados de búsqueda para: "${buscar_query}"`;
  recipes_container.appendChild(title);

  // fetch para obtener recetas
  fetch(`https://dummyjson.com/recipes/search?q=${buscar_query}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loader.style.display = 'none'; // ocultar el loader asi esta mas lindo

      if (data.recipes && data.recipes.length > 0) {
        let contenido = '';
        data.recipes.forEach(function (recipe) {
          contenido += `
            <div class="recipe-card">
                <img src="${recipe.image || './img/default-recipe.jpg'}" alt="${recipe.title}" class="recipe-card-img">
                <div class="recipe-card-content">
                    <h2>${recipe.title}</h2>
                    <p>${recipe.description}</p>
                    <a href="./recipe-details.html?id=${recipe.id}" class="detalleHover">Detalle de la receta</a>
                </div>
            </div>`;
        });
        recipes_container.innerHTML += contenido;
      } else {
        recipes_container.innerHTML += `<p>No se encontraron resultados para "${buscar_query}".</p>`;
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      loader.style.display = 'none';
      recipes_container.innerHTML += `<p>Error al cargar los resultados. Inténtalo más tarde.</p>`;
    });
} else {
  loader.style.display = 'none';
  recipes_container.innerHTML += `<p>No se proporcionó un término de búsqueda.</p>`;
}

let searchForm = document.querySelector(".buscador");
let searchInput = searchForm.querySelector("input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let query = searchInput.value.trim();

  if (query === "") {
    alert("El campo de búsqueda no puede estar vacío.");
  } else if (query.length < 3) {
    alert("El término de búsqueda debe tener al menos 3 caracteres.");
  } else {
    window.location.href = `search-results.html?buscar=${query}`;
  }
});
