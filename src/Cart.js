import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, useParams } from "react-router-dom";
import Details from "./Details";
import MyItem from "./MyItem";
import { useGlobalAmountCart } from "./addToCart";

function Cart(props) {
  let { id } = useParams();
  // console.log(props, "jaja", id);
  useEffect(() => {
    fetchItems();
  }, []);
  const [product, setProduct] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      `https://crudcrud.com/api/${props.APIkey}/products/${id}`
    );
    const product = await data.json();
    setProduct(product);
  };
  let [myCart, setMyCart] = useGlobalAmountCart("myCart");
  return (
    <div className="main">
      <div className="text">My Cart:</div>
      <MyItem />
    </div>
  );
}

export default Cart;
