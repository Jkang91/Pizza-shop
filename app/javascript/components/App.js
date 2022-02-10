import React from "react";
import Nav from "./Navbar";
import DisplayContainer from "./DisplayContainer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
      <DisplayContainer/>
    </>
  );
}

export default App;
