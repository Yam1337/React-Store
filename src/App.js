import React from "react";
import Cart from "./Cart";
import Details from "./Details";
import History from "./History";
import Home from "./Home";
import Start from "./Start";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useGlobalAPI } from "./Start";

function App() {
  let [myAPIKey, setMyAPIKey] = useGlobalAPI("myAPIKey");

  const AuthenticatedRoutes = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Start} />
            <Route
              path="/shop"
              exact
              component={() => <Home APIkey={myAPIKey} />}
            />
            <Route path="/shop/cart" exact component={Cart} />
            <Route
              path="/shop/cart/:id"
              exact
              component={() => <Cart APIkey={myAPIKey} />}
            />
            <Route path="/shop/details" exact component={Details} />
            <Route path="/shop/history" component={History} />
            <Route
              path="/shop/details/:id"
              component={() => <Details APIkey={myAPIKey} />}
            />
          </Switch>
        </div>
      </Router>
    );
  };
  return (
    <Router>
      <Switch>
        <Route component={AuthenticatedRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
