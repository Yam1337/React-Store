import React from "react";
import { Link } from "react-router-dom";
import Sun from "./images/sun.svg";
import CartCounter from "./CartCounter";
import "./App.css";
import CartIcon from "./CartIcon";
import HistoryIcon from "./HistoryIcon";

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div>
          <div className="navbar1">
            <div className="navbarLogo">
              <Link to="/shop">
                <img src={Sun} alt="" width="50px" />
              </Link>
            </div>
            <div className="logotext">Sun-Tech Store</div>
          </div>
        </div>
        <div>
          <div className="navbar1">
            <div className="navbarCart">
              <Link to="/shop/cart">
                <CartIcon number={CartCounter} />
              </Link>
            </div>
            <div className="navbarHistory">
              <Link to="/shop/history">
                <HistoryIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
