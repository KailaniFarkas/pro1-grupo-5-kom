// LA LISTA DE CATEGORIAS EN EL SITIO (DESDE LA API)

fetch('https://dummyjson.com/recipes')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Datos originales:", data);

        const recipesByCategory = data.recipes.reduce(function(categories, recipe) {
            var category = recipe.category || 'Sin categoría';
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(recipe);
            return categories;
        }, {});
        
        console.log("Recetas por categoría:", recipesByCategory);
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });