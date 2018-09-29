import React, { Component } from "react";
import { connect } from "react-redux";
import { newUsers } from "../ducks/reducers/userReducer";
import Cluster from "../components/googleMap/Cluster";
import Location from "../components/Location";
// import axios from "axios";
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      address: " ",
      phone_number: " "
    };

    //   this.handleAuth0 = this.handleAuth0.bind(this);
    // }
    // handleAuth0() {
    //   window.location.href = "http://localhost:3001/login";
  }
  render() {
    console.log(this.state);
    const { name, email, address, phone_number } = this.state;
    return (
      <div className="overall">
        <div className="newUser">
          <h3>Become a Battle Buddy</h3>
          Name
          <br />
          <input
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <br />
          Email
          <br />
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="email"
            value={email}
          />
          <br />
          <br />
          Address
          <Location />
          <br />
          <input
            placeholder="address"
            onChange={e => this.setState({ address: e.target.value })}
            type="text"
            value={address}
          />
          <br />
          <br />
          Phone Number
          <br />
          <input
            onChange={e => this.setState({ phone_number: e.target.value })}
            type="text"
            placeholder="phone_number"
            value={phone_number}
          />
          <br />
          <br />
          <button
            onClick={() =>
              this.props.newUsers(name, email, address, phone_number)
            }
          >
            Submit
          </button>
          <br />
          <br />
          {/* <div className="auth0">
          <button onClick={() => this.handleAuth0()}>Auth0 login</button>
        </div>
        <h3>{this.props.authid}</h3> */}
        </div>
        <Cluster />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, email, phone_number, authUser, authid } = state.user;
  return { name, address, email, phone_number, authUser, authid };
}
// const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { newUsers }
)(NewUser);
