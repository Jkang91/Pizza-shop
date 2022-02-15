import React from "react";

function Pizza(pizza) {
  console.log(pizza.pizza);
  return (
    <div>
      {pizza.pizza.image_url}
      <div>Name: {pizza.pizza.name}</div>
      <div>Price: {pizza.pizza.price}</div>
      <div>Description: {pizza.pizza.description}</div>
    </div>
  );
}

export default Pizza;
