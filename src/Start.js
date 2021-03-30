import React, { useState } from "react";
import { createGlobalState } from "react-hooks-global-state";
import "./App.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const initialState = { myAPIKey: "" };
const { useGlobalState } = createGlobalState(initialState);
const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

function Start() {
  let history = useHistory();
  const [myAPIInput, setMyAPIInput] = useState("");
  let swap = () => {
    history.push("/shop/");
  };
  const startAPI = () => {
    if (myAPIInput.length < 32) {
      alert("ERROR! Api key must be 32-digits");
    } else if (myAPIInput.length === 32) {
      setMyAPIKey(myAPIInput);
      swap();
    }
  };
  let inputChange = (e) => {
    setMyAPIInput(e.target.value);
  };
  const [myAPIKey, setMyAPIKey] = useGlobalState("myAPIKey");
  return (
    <div className="startPageContent">
      <div className="startProvide">
        Please provide API Key from{" "}
        <a href="https://crudcrud.com" target="_blank">
          crudcrud.com
        </a>
      </div>
      <div className="explain">
        (The API Key is last 32-digits from below link)
      </div>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        src="https://crudcrud.com"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div className="startPage">
        <input
          className="startPage"
          type="text"
          maxLength="32"
          value={myAPIInput}
          onChange={inputChange}
        />
        {/* <ConditionalLink to="/shop" condition={myAPIKey.length === 32}> */}
        <button onClick={startAPI}>Start</button>
        {/* </ConditionalLink> */}
      </div>
    </div>
  );
}

export const useGlobalAPI = useGlobalState;
export default Start;
