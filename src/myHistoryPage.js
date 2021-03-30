import React from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import CheckAPI from "./checkAPI";
import { useGlobalHistory } from "./Buy";

function MyHistoryPage(props) {
  function History(props) {
    let history = useHistory();
    let [myHistory, setMyHistory] = useGlobalHistory("myHistory");

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
                <div className="myHistory">
                  <div className="historyDate">{x.date}</div>
                  <div className="historyName">{x.name}</div>
                  <div className="historyCount">{x.count}</div>
                  <div className="historySum">{x.sum}</div>
                  <div className="historySum">{x.allSum}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="empty">
          <div>There is no shopping history</div>
        </div>
      );
    }
  }
}

export default MyHistoryPage;
