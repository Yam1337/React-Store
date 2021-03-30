import React from "react";
import "./App.css";
import Nav from "./Nav";
import { useGlobalHistory } from "./Buy";
import { useHistory } from "react-router-dom";
import CheckAPI from "./checkAPI";

function History(props) {
  let [myHistory, setMyHistory] = useGlobalHistory("myHistory");

  let hacking = 0;

  console.log(myHistory);

  if (myHistory.length > 0) {
    return (
      <div>
        <CheckAPI />
        <Nav />
        <div className="main">
          <div className="text">Orders History</div>
          <div className="historyOrder">
            <div className="myHistory1">
              <div className="historyDate">Date:</div>
              <div className="historyName">Product:</div>
              <div className="historyCount">Amount:</div>
              <div className="historySum">Price:</div>
            </div>
            {myHistory.map((x) => (
              <div>
                <div className="smaller">
                  <div className="historyDate2">{x[0].date}</div>
                </div>
                {x.map((y) => (
                  <div className="myHistory">
                    <div className="historyName">{y.name}</div>
                    <div className="historyCount">{y.count}</div>
                    <div className="historySum">{y.sum + " zł"}</div>
                  </div>
                ))}
                {
                  <div className="historySum2">
                    <div>{"total " + x[0].allSum + " zł"}</div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <CheckAPI />
        <Nav />
        <div className="text">My Shopping History:</div>
        <div className="empty">
          <div>There is no shopping history</div>
        </div>
      </div>
    );
  }
}

export default History;
