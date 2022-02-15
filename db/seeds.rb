pizzas = Pizza.create([
    {
        name: "Margherita Pizza",
        image_url: "https://media.istockphoto.com/photos/wood-fired-pizza-picture-id637388180?k=20&m=637388180&s=612x612&w=0&h=UHMXXNBc5IttXC9CiH7AN29HxpKsBt65fjmuFIAEHFI=",
        price: "pie: $24/ slice: $3.50",
        description: "Homemade tomato sauce with fresh basil and mozarella cheese."
    },
    {
        name: "Cheese Pizza",
        image_url: "https://d1ouk4tp1vcuss.cloudfront.net/s3.amazonaws.com/ODNUploads/5f7a00a3a1cb9NY_Pizza.jpg",
        price: "pie: $20/ slice: $2.75",
        description: "Made fresh everyday with mozarella cheese"
    },
    {
        name: "Grandma Pizza",
        image_url: "https://cdn.tasteatlas.com/images/dishrestaurants/94e916548a544648bf057947206c17a1.jpg?w=600&h=450",
        price: "pie: $24/ slice: $3.50",
        description: "Homemade spicy tomato sauce with fresh mozarella and american cheese"
    }
])

reviews = Review.create(
    {
        title: "Great pizza!",
        description: "Had the grandma slice.  It was to die for!",
        score: 5,
        pizza: pizzas.third
    }
)