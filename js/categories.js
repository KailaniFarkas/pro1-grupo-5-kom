function fetchCategories() {
    fetch(`https://dummyjson.com/recipes/categories`)
        .then((response) => response.json())
        .then((categories) => {
            const container = document.getElementById("categories-container");
            categories.forEach((category) => {
                const categoryLink = document.createElement("a");
                categoryLink.href = `category.html?category=${category}`;
                categoryLink.textContent = category;
                container.appendChild(categoryLink);
            });
        });
}

fetchCategories();
