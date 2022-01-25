pizzas = Pizza.create([
    {
        name: "Margherita Pizza",
        image_url: "margherita pizza.png",
        price: "pie: $24/ slice: $3.50",
        description: "Homemade tomato sauce with fresh basil and mozarella cheese."
    },
    {
        name: "Cheese Pizza",
        image_url: "cheese pizza.png",
        price: "pie: $20/ slice: $2.75",
        description: "Made fresh everyday with mozarella cheese"
    },
    {
        name: "Grandma Pizza",
        image_url: "grandma pizza.png",
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