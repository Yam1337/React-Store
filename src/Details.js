import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams, Link } from "react-router-dom";
import AddToCart from "./addToCart";
import Nav from "./Nav";
import CheckAPI from "./checkAPI";

function Details(props) {
  let { id } = useParams();
  const [myAmount, setMyAmount] = useState(1);
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
  let inputChange = (e) => {
    setMyAmount(e.target.value);
  };
  return (
    <div>
      <CheckAPI />
      <Nav />
      <div className="main">
        <div className="container">
          <div className="productName">{product.name}</div>
          <img alt="" className="productDetails" src={product.image} />
          <div className="productDesc">{product.desc}</div>
          <div className="order">
            <Link to="/shop/">
              <button className="myButton">Back to shop</button>
            </Link>
            <input
              type="number"
              onChange={inputChange}
              value={myAmount}
              step="1"
              min="1"
              max="10"
              className="myInput"
            />
            <AddToCart
              product={product}
              myAmount={myAmount}
              price={product.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
