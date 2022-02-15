import React from 'react';
import Pizza from './Pizza';

function Pizzas({pizzas}) {
    
    console.log(pizzas)
    const diff_pizzas = pizzas.map((pizza) => {
        return <Pizza key={pizza.id} pizza={pizza}/>
    })
  return (
  <div className="pizza-container">
      {diff_pizzas}
  </div>
  );
}

export default Pizzas;
