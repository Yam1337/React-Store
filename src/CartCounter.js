import React, { useState, useEffect } from "react";
import "./App.css";
import { useGlobalAmountCart } from "./addToCart";

function CartCounter() {
  let [myCart, setMyCart] = useGlobalAmountCart("myCart");
  let [myNumber, setMyNumber] = useState("");
  let cartItems = myCart.reduce((total, obj) => obj.count + total, 0);
  useEffect(() => {
    if (myCart.length > 0) {
      setMyNumber(cartItems);
    } else {
      setMyNumber("");
    }
  }, [myCart.length]);
  if (myNumber >= 100) {
    myNumber = "99+";
  }

  return <div className="cartCounter">{myNumber}</div>;
}

export default CartCounter;
