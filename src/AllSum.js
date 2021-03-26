import React, { useState } from "react";
import "./App.css";
import MyItem from "./MyItem";

function AllSum(props) {
  let [mySum, setMySum] = useState(0);
  for (let i = 0; i < props.length; i++) {
    // setMySum(mySum + 5);
  }
  return (
    <div>
      <div>{mySum}</div>
    </div>
  );
}

export default AllSum;
