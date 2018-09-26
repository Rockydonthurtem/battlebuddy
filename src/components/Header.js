import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneUser } from "../ducks/reducers/userReducer";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      admin: null
    };
    // this.getAdmin = this.getAdmin.bind(this);
  }
  componentDidMount() {
    this.props.getOneUser().then(response => {
      console.log(response);
      // if (response.value.data.authid) {
      //   this.setState({ loggedIn: true });
      // }
      this.setState({
        loggedIn: true,
        admin: response.value.data.admin
      });
    });
    // this.getAdmin();
  }
  // getAdmin() {
  //   axios.get("/api/admin").then(response => {
  //     console.log(response);
  //     this.setState({ admin: response.data[0].admin });
  //   });
  // }
  render() {
    console.log(this.state);
    return this.state.loggedIn && this.state.admin === 1 ? (
      <div className="header">
        <Link to="/chat">
          <p>Chat</p>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/challenge">Assignment</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/newusers">Become a Buddy</Link>
        <Link to="/bulletin">Bulletin Board</Link>
        <Link to="/donate">Donate</Link>
        <a href="http://localhost:3001/logout">Logout</a>
        <Link to="/text">Twilio</Link>
        {/* <Link to="/checkout">Checkout</Link> */}
        <Link to="/nodemailer">Nodemailer</Link>
        <Link to="/getusers">GetUsers</Link>
      </div>
    ) : this.state.loggedIn && !this.state.admin ? (
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/chat">
          <p>Chat</p>
        </Link>
        <Link to="/challenge">Challenge</Link>

        <Link to="/resources">Resources</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/newusers">Become a Buddy</Link>
        <Link to="/bulletin">Bulletin Board</Link>
        <Link to="/donate">Donate</Link>

        <a href="http://localhost:3001/logout">Logout</a>
      </div>
    ) : (
      <div className="header">
        <Link to="/about">About</Link>
        <Link to="/chat">
          <p>Chat</p>
          {/* <Link to="/firstpage">FirstPage</Link> */}
        </Link>

        <a href="http://localhost:3001/login">Login</a>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getOneUser }
)(Header);
