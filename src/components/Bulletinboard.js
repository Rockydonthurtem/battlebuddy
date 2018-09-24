import React, { Component } from "react";
import axios from "axios";

export default class Bulletinboard extends Component {
  componentDidMount() {
    axios.get("/api/Somethingsomethingsomething");
  }

  render() {
    return (
      <div>
        <p>Need CRUD here</p>
      </div>
    );
  }
}
