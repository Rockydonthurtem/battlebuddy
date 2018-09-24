// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getOneUser } from "../ducks/reducers/userReducer";

// class AuthUsers extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     user: {}
//   //   };
//   // }

//   componentDidMount() {
//     this.props.getOneUser();
//     // .then(response =>
//     //   this.setState({
//     //     user: response.value.data
//     //   })
//     // );
//   }

//   render() {
//     // console.log(this.state);
//     return (
//       <div className="authuserspage">
//         <p>Only for approved users</p>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { authUser } = state;
//   return { authUser };
// }

// export default connect(
//   mapStateToProps,
//   { getOneUser }
// )(AuthUsers);
