import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import axios from "axios";
import Pizzas from "./Pizzas";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "../App.css";

function DisplayContainer() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("/pizzas.json")
      .then((resp) => {
        setPizzas(resp.data);
        console.log(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, []);

  console.log(pizzas);

  return (
    <div className="display-container">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/diff_pizzas">
          <Pizzas pizzas={pizzas} />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default DisplayContainer;
