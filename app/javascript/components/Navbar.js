import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";


function Navbar() {
  return (
    <div className="nav-bar">
      <div className="link">
        <NavLink to="/diff_pizzas">Menu</NavLink>
      </div>
      <div className="link">
        <NavLink to="/contactus">Contact Us</NavLink>
      </div>
      <div className="link">
        <NavLink to="/aboutus">About Us</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
