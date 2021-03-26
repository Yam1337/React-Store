import React, { useState } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Details from "./Details";
import History from "./History";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  // API KEY HERE ***
  const APIkey = "ddc1709eb9df418788ea967ee04ab6d4";
  // API KEY HERE ***

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home APIkey={APIkey} />} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cart/:id" component={() => <Cart APIkey={APIkey} />} />
          <Route path="/details" exact component={Details} />
          <Route path="/history" component={History} />
          <Route
            path="/details/:id"
            component={() => <Details APIkey={APIkey} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
