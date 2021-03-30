import React from "react";
import Cart from "./images/cart.svg";
import CartCounter from "./CartCounter";
import "./App.css";

function CartIcon() {
  return (
    <div>
      <div className="cart">
        <img className="cartIcon" src={Cart} alt="" width="40px" />
        <CartCounter />
      </div>
    </div>
  );
}

export default CartIcon;
