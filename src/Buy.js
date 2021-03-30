import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";
import { useGlobalAmountCart } from "./addToCart";

const initialState = { myHistory: [] };
const { useGlobalState } = createGlobalState(initialState);

function Buy(props) {
  const [myCart, setMyCart] = useGlobalAmountCart("myCart");
  const [myHistory, setMyHistory] = useGlobalState("myHistory");
  let curTime = new Date().toLocaleString();
  let makeAndClear = () => {
    let array = [];
    myCart.map((x) =>
      array.push({
        count: x.count,
        price: x.price,
        name: x.name,
        sum: x.sum,
        date: curTime,
        allSum: props.allSum,
      })
    );
    myHistory.push(array);
    setMyCart([]);
  };
  return (
    <div className="buyContainer">
      <Link to="/shop/">
        <button className="myButton">Back to shop</button>
      </Link>
      <Link to={"/shop/history/"}>
        <button className="myButton" onClick={makeAndClear}>
          Buy Now
        </button>
      </Link>
    </div>
  );
}

export default Buy;
export let useGlobalHistory = useGlobalState;
