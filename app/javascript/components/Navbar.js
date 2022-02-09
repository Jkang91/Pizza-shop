import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Pizzas from "./Pizzas";
import axios from 'axios';

function Navbar() {

  return (
    <div>
      <NavLink to="/pizzas">Pizzas</NavLink>
    </div>
  );
}

export default Navbar;
