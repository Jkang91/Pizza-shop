import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Pizzas from "./Pizzas";
import axios from "axios";

function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/diff_pizzas">Menu</NavLink>
      </div>
      <div>
        <NavLink to="/contactus">Contact Us</NavLink>
      </div>
      <div>
        <NavLink to="/aboutus">About Us</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
