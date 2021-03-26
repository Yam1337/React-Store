import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, useParams } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import AddToCart from "./addToCart";

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
  console.log(product.price, "tutaj");
  return (
    <div className="main">
      <div className="container">
        <div className="productName">{product.name}</div>
        <img alt="" className="productDetails" src={product.image} />
        <div className="productDesc">{product.desc}</div>
        <div className="order">
          <input
            type="number"
            onChange={inputChange}
            value={myAmount}
            step="1"
            min="1"
            max="100"
            className="myInput"
          />
          <AddToCart
            product={product}
            myAmount={myAmount}
            price={product.price}
          />
          {/* <Link to={`/cart/${product._id}`}>
            <button
              className="myButton"
              onClick={() => {
                for (let i = 0; i < myAmount; i++) {
                  myCart.push(product);
                }
                console.log(myCart);
              }}
            >
              Add to cart
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Details;
