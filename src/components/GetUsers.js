import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../ducks/reducers/userReducer";

class GetUser extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props);
    let show = this.props.user.users.map((users, i) => {
      return (
        <div key={i}>
          {users.name}
          <br />
          {users.email}
          <br />
          {users.messages}
        </div>
      );
    });
    return <div>{show}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUsers }
)(GetUser);
