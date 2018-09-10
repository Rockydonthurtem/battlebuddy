import React, { Component } from "react";
import { connect } from "react-redux";
import { newUsers } from "../ducks/reducers/userReducer";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      address: " ",
      phone_number: " "
    };
  }

  render() {
    console.log(this.state);
    const { name, email, address, phone_number } = this.state;
    return (
      <div>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          type="text"
          placeholder="name"
          value={name}
        />
        <input
          onChange={e => this.setState({ email: e.target.value })}
          type="text"
          placeholder="email"
          value={email}
        />
        <input
          onChange={e => this.setState({ address: e.target.value })}
          type="text"
          placeholder="address"
          value={address}
        />
        <input
          onChange={e => this.setState({ phone_number: e.target.value })}
          type="text"
          placeholder="phone_number"
          value={phone_number}
        />
        <button
          onClick={() =>
            this.props.newUsers(name, email, address, phone_number)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, email, phone_number } = state;
  return { name, address, email, phone_number };
}

export default connect(
  mapStateToProps,
  { newUsers }
)(NewUser);
