import React, { useState } from "react";
import "./App.css";

function AllSum(props) {
  let [mySum, setMySum] = useState(0);
  for (let i = 0; i < props.length; i++) {}
  return (
    <div>
      <div>{mySum}</div>
    </div>
  );
}

export default AllSum;
