fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(res => res.json())
.then(console.log);