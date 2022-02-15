import React from "react";
import Nav from "./Navbar";
import DisplayContainer from "./DisplayContainer";
import { Route, Switch } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <>
      <Nav/>
      <DisplayContainer/>
    </>
  );
}

export default App;
