import React, { useEffect } from "react";
import { useGlobalAmountCart } from "./addToCart";
import Buy from "./Buy";
import Trash from "./images/trash.svg";

const MyItem = () => {
  let [myCart, setMyCart] = useGlobalAmountCart("myCart");
  let [mySum, setMySum] = React.useState([]);
  let delItem = (e) => {
    setMyCart(myCart.filter((x) => x.myid !== e));
  };
  useEffect(() => {
    let sumOfPrices = myCart.map((a) => {
      return Number((a.price * 100 * a.count) / 100);
    });
    if (myCart.length > 0) {
      setMySum(
        sumOfPrices.reduce((a, b) => (Number(a) * 100 + Number(b) * 100) / 100)
      );
    }
  }, [myCart]);

  if (myCart.length > 0) {
    return (
      <div>
        {myCart.map((x) => (
          <div className="myCart">
            <div className="cartName">{x.name}</div>
            <div className="cartX">
              x {x.count}{" "}
              <button
                className="trash"
                onClick={() => {
                  delItem(x.myid);
                }}
              >
                <img alt="" src={Trash} />
              </button>
            </div>
            <div className="cartSum">{x.sum} zł</div>
          </div>
        ))}
        <div className="mySum">
          <div className="allSum">{(mySum * 100) / 100} zł</div>
        </div>
        <Buy allSum={(mySum * 100) / 100} myCart={myCart} />
      </div>
    );
  } else {
    return (
      <div className="empty">
        <div>Cart is empty</div>
      </div>
    );
  }
};

export default MyItem;
