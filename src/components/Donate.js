import React, { Component } from "react";
import Checkout from "./stripe/Checkout";
import "./donate.css";
class Donate extends Component {
  render() {
    return (
      <div className="Johnny">
        <div className="salute">
          <div className="donate1">
            <h2 className="story">
              Donations will help raise awareness continue the fight against
              veteran suicide.
            </h2>
            <label class="container1">
              $1
              <input type="checkbox" />
              <span class="checkmark" />
            </label>
            <br />
            <label className="container1">
              $5
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <br />
            <label className="container1">
              $25
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <br />
            <label className="container1">
              $50
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            Enter different amount
            <br />
            <input type="text" />
            <br />
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}
export default Donate;
