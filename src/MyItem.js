import React, { useState } from "react";
import { useGlobalAmountCart } from "./addToCart";
import AllSum from "./AllSum";

const MyItem = () => {
  let [myCart, setMyCart] = useGlobalAmountCart("myCart");
  let delItem = (e) => {
    setMyCart(myCart.filter((x) => x.myid !== e));
  };
  let mySum = [];
  console.log(myCart);
  if (myCart.length > 0) {
    return (
      <div>
        {myCart.map((x) => (
          <div className="myCart">
            <div className="cartName">{x.name}</div>
            <div className="cartX">
              x {x.count}{" "}
              <button
                onClick={() => {
                  delItem(x.myid);
                }}
              >
                del
              </button>
            </div>
            <div className="cartSum">
              {(Number(x.count) * Number(x.price) * 100) / 100}zł
            </div>
            {mySum.push(
              Number((Number(x.count) * Number(x.price) * 100) / 100)
            )}
          </div>
        ))}
        <div className="mySum">
          <div className="allSum">{mySum}</div>
        </div>
      </div>
    );
  } else {
    return <div className="empty">Cart is empty</div>;
  }
};

export default MyItem;
