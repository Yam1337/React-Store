import React from "react";
import "./App.css";
import MyItem from "./MyItem";
import Nav from "./Nav";
import CheckAPI from "./checkAPI";

function Cart(props) {
  return (
    <div>
      <CheckAPI />
      <Nav />
      <div className="main">
        <div className="text">My Cart:</div>
        <MyItem />
      </div>
    </div>
  );
}

export default Cart;
