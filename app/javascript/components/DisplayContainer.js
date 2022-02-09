import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from './WelcomePage';
import axios from 'axios';
import Pizzas from './Pizzas'

function DisplayContainer() {
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        axios
        .get('/pizzas.json')
        .then((resp) => {
            console.log(resp)
            setPizzas(resp);
        })
        .catch((resp) => console.log(resp));
    }, [])

  return(
  <div>
      <Switch>
        <Route exact path="/">
            <WelcomePage/>
        </Route>
        <Route exact path="/pizzas">
            <Pizzas/>
        </Route>
      </Switch>
  </div>
  );
}

export default DisplayContainer;
