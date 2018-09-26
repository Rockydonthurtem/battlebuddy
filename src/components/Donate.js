import React, { Component } from "react";
import Checkout from "./stripe/Checkout";

class Donate extends Component {
  render() {
    return (
      <div>
        <br />
        <input type="text" placeholder="Enter $ amount" />
        <br />
        <br />
        <Checkout />
      </div>
    );
  }
}
export default Donate;
