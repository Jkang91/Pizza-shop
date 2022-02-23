import React from "react";

function Pizza(pizza) {
  console.log(pizza);
  return (
    <div className="pizza">
      <img src={pizza.pizza.image_url} alt={pizza.pizza.name}/>
      <div>Name: {pizza.pizza.name}</div>
      <div>Price: {pizza.pizza.price}</div>
      <div>Description: {pizza.pizza.description}</div>
      <div>Reviews: {pizza.pizza.reviews}</div>
    </div>
  );
}

export default Pizza;
