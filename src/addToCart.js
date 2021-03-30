import React from "react";
import { Link } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";

const initialState = { myCart: [] };
const { useGlobalState } = createGlobalState(initialState);
const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

let addToCartFunction = ({ product, myAmount, price, myCart, setMyCart }) => {
  if (myAmount <= 10 && myAmount >= 1 && myAmount % 1 === 0) {
    for (let i = 0; i < myCart.length; i++) {
      if (product.name === myCart[i].name) {
        myCart[i].count = Number(myCart[i].count) + Number(myAmount);
        myCart[i].sum =
          Number(myCart[i].sum) +
          Number((myCart[i].price * 10) / 10) * myAmount;
        setMyCart(myCart);
        return;
      }
    }
    setMyCart([
      ...myCart,
      {
        name: product.name,
        count: Number(myAmount),
        price: price,
        myid: Math.random(),
        sum: (price * 100 * myAmount) / 100,
      },
    ]);
  } else {
    alert("Amount must be between 1 and 10, and must be divisible by 1!");
  }
};

const AddToCart = ({ product, myAmount, price }) => {
  const [myCart, setMyCart] = useGlobalState("myCart");
  return (
    <div>
      <div></div>
      <ConditionalLink
        to={`/shop/cart/${product._id}`}
        condition={myAmount <= 10 && myAmount >= 1 && myAmount % 1 === 0}
      >
        <button
          className="myButton"
          onClick={() => {
            addToCartFunction({ product, myAmount, price, myCart, setMyCart });
          }}
        >
          Add to cart
        </button>
      </ConditionalLink>
    </div>
  );
};

export default AddToCart;
export const useGlobalAmountCart = useGlobalState;
