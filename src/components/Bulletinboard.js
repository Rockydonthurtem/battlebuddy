import React, { Component } from "react";
import axios from "axios";
import "./Bulletinboard.css";

export default class Bulletinboard extends Component {
  constructor() {
    super();
    this.state = {
      date: " ",
      location: " ",
      description: " ",
      who: " ",
      what: " ",
      activity: [],
      services: [],
      bulletinboard: []
    };
    this.handleActivity = this.handleActivity.bind(this);
    this.handleServices = this.handleServices.bind(this);
  }
  componentDidMount() {
    axios.get("/api/bulletinboard").then(response => {
      console.log(response);
      this.setState({ bulletinboard: response.data });
    });
  }
  handleActivity(date, location, description) {
    axios
      .post(`/api/activity, ${(date, location, description)}`)
      .then(response => {
        console.log(response);
        this.setState({ activity: response.data });
      });
  }
  handleServices(date, who, location, what) {
    axios
      .post(`/api/services, ${(date, who, location, what)}`)
      .then(response => {
        console.log(response);
        this.setState({ services: response.data });
      });
  }
  render() {
    return (
      <div className="forReact">
        {/* --------------------------------------------------------------- */}
        <div className="bulletin">
          <div className="activity">Activity</div>
          <div className="services">Services</div>
        </div>
        {/* ----------------------------------------------------------------- */}

        <div className="dates">
          {/* ----------------------------------------------------------------- */}
          <div>
            <input
              onChange={e => this.setState({ date: e.target.value })}
              type="date"
              placeholder="Date"
            />
            <br />
            <input
              onChange={e => this.setState({ location: e.target.value })}
              type="text"
              placeholder="Location"
            />
            <br />
            <textarea
              onChange={e => this.setState({ description: e.target.value })}
              name="Description"
              id=""
              cols="30"
              rows="10"
            >
              Desc
            </textarea>
            <br />
            <button
              onClick={() =>
                this.handleActivity(
                  this.state.date,
                  this.state.location,
                  this.state.description
                )
              }
            >
              Submit
            </button>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div>
            <br />
            <input
              onChange={e => this.setState({ date: e.target.value })}
              type="date"
              placeholder="date"
            />
            <br />
            <input
              onChange={e => this.setState({ who: e.target.value })}
              type="text"
              placeholder="who"
            />
            <br />
            <input
              onChange={e => this.setState({ location: e.target.value })}
              type="text"
              placeholder="location"
            />
            <br />
            <textarea
              onChange={e => this.setState({ what: e.target.value })}
              name="what"
              id=""
              cols="30"
              rows="10"
              placeholder="what"
            />
            <br />
            <button
              onClick={() =>
                this.handleServices(
                  this.state.date,
                  this.state.who,
                  this.state.location,
                  this.state.what
                )
              }
            >
              Submit
            </button>
          </div>
          {/* -------------------------------------------------------------- */}
        </div>
      </div>
    );
  }
}
