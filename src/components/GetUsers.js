import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, deleteUsers } from "../ducks/reducers/userReducer";

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
          <button onClick={() => this.props.deleteUsers(users.user_id)}>
            Delete
          </button>
          <br />
        </div>
      );
    });
    return <h1>{show}</h1>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUsers, deleteUsers }
)(GetUser);
