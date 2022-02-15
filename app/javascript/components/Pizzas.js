import React from 'react';
import Pizza from './Pizza';

function Pizzas({pizzas}) {
    
    console.log(pizzas)
    const diff_pizzas = pizzas.map((pizza) => {
        return <Pizza pizza={pizza}/>
    })
  return (
  <div>
      {diff_pizzas}
  </div>
  );
}

export default Pizzas;
