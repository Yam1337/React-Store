import React from "react";
import { Link } from "react-router-dom";
import Sun from "./images/sun.svg";
import Cart from "./images/cart.svg";
import History from "./images/history.svg";
import "./App.css";

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div className="baritemsl">
          <Link className="navitems" to="/">
            <img src={Sun} alt="" width="50px" />
          </Link>
          <div>Sun-Tech Store</div>
        </div>
        <div className="baritemsr">
          <Link className="navitems" to="/cart">
            <img src={Cart} alt="" width="40px" />
          </Link>
          <Link className="navitems" to="/history">
            <img src={History} alt="" width="40px" />
          </Link>
        </div>
      </div>
      {/* <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/history">
          <li>History</li>
        </Link>
      </ul> */}
    </nav>
  );
}

export default Nav;
