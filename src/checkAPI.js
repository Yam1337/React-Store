import React from "react";
import { useGlobalAPI } from "./Start";
import { useHistory } from "react-router-dom";

function CheckAPI() {
  let history = useHistory();
  let [myAPIKey, setMyAPIKey] = useGlobalAPI("myAPIKey");

  if (myAPIKey === "") {
    history.push(process.env.PUBLIC_URL + "/");
  }
  return <div></div>;
}

export default CheckAPI;
