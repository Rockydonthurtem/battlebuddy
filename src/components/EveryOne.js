import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneUser } from "../ducks/reducers/userReducer";
class EveryOne extends Component {
  componentDidMount() {
    this.props.getOneUser();
  }
  render() {
    console.log(this.props);
    return (
      <div className="everyone">
        <p>Page anyone can access</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authUser } = state;
  return { authUser };
}
export default connect(
  mapStateToProps,
  { getOneUser }
)(EveryOne);
