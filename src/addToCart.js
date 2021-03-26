import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";
import Details from "./Details";
import Cart from "./Cart";

const initialState = { myCart: [] };
const { useGlobalState } = createGlobalState(initialState);

const AddToCart = (props) => {
  const [myCart, setMyCart] = useGlobalState("myCart");
  console.log(myCart);
  return (
    <div>
      <div></div>
      <Link to={`/cart/${props.product._id}`}>
        <button
          className="myButton"
          onClick={() => {
            setMyCart([
              ...myCart,
              {
                name: props.product.name,
                count: props.myAmount,
                price: props.price,
                myid: Math.random(),
              },
            ]);
          }}
        >
          Add to cart
        </button>
      </Link>
      <myItem myCart={myCart} productName={props.product.name} />
    </div>
  );
};

export default AddToCart;
export const useGlobalAmountCart = useGlobalState;
