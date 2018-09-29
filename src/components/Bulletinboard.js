import React, { Component } from "react";
import axios from "axios";
import "./Bulletinboard.css";
import { connect } from "react-redux";

class Bulletinboard extends Component {
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
    // this.handleUpdateActivity = this.handleUpdateActivity.bind(this);
    this.handleDeleteActivity = this.handleDeleteActivity.bind(this);
  }
  componentDidMount() {
    axios.get("/api/bulletinboard").then(response => {
      console.log(response);
      this.setState({ bulletinboard: response.data });
    });
  }
  // handleUpdateActivity(id, date, location, description) {
  //   axios
  //     .put(`/api/updateActivity/${id}`, {
  //       date,
  //       location,
  //       description
  //     })
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ activity: response.data });
  //     });
  // }
  handleDeleteActivity(id) {
    axios.delete(`/api/deleteActivity/${id}`).then(response => {
      console.log(response);
      this.setState({ activity: response.data });
    });
  }
  handleActivity(date, location, description) {
    axios
      .post(`/api/activity`, { date, location, description })
      .then(response => {
        console.log(response);
        this.setState({ activity: response.data });
      });
  }
  handleServices(date, who, location, what) {
    axios
      .post(`/api/services`, { date, who, location, what })
      .then(response => {
        console.log(response);
        this.setState({ services: response.data });
      });
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    let news = this.state.bulletinboard.map((e, i) => {
      return (
        <div key={i}>
          {e.description}
          {e.service}
          {(this.props.user.authUser.user_id == e.user_id ||
            this.props.user.authUser.admin) && (
            <button onClick={() => this.handleDeleteActivity(e.activity_id)}>
              Delete
            </button>
          )}
          {/* <button
            onClick={() =>
              this.handleUpdateActivity(
                e.activity_id,
                e.date,
                e.location,
                e.description
              )
            }
          >
            Edit
          </button> */}
        </div>
      );
    });
    return (
      <div className="forReact">
        {/* --------------------------------------------------------------- */}
        <div className="bulletin">
          <div className="activity">
            Activity
            {news}
          </div>
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
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Bulletinboard);
