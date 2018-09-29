import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneUser } from "../ducks/reducers/userReducer";
import sweetAlert2 from "sweetalert2";
import "./Header.css";

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
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div className="header">
          <button
            onClick={() =>
              sweetAlert2(
                `${"Please dial 911 or Crisis Hotline, if you feel like you will hurt yourself or others or need immediately help, "}`
              )
            }
          >
            9 Line/Help
          </button>
          <Link to="/chat">Chat</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/challenge">Assignment</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/newusers">Become a Buddy</Link>
          <Link to="/bulletin">Bulletin Board/Donation</Link>
          <Link to="/donate">Donate</Link>
          <a href="http://localhost:3001/logout">Logout</a>
          {/* <a href={process.env.REACT_APP_LOGOUT}>Logout</a> */}
          <Link to="/text">Admin</Link>
          {/* <Link to="/checkout">Checkout</Link> */}
          {/* <Link to="/nodemailer">Nodemailer</Link> */}
          {/* <Link to="/getusers">GetUsers</Link> */}
        </div>
      </div>
    ) : this.state.loggedIn && !this.state.admin ? (
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div className="header">
          <button
            onClick={() =>
              sweetAlert2(
                `${"Please dial 911 or Crisis Hotline, if you feel like you will hurt yourself or others or need immediately help, "}`
              )
            }
          >
            9 Line/Help
          </button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/challenge">Challenge</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/newusers">Become a Buddy</Link>
          <Link to="/bulletin">Bulletin Board/Donation</Link>
          <Link to="/donate">Donate</Link>
          <a href="http://localhost:3001/logout">Logout</a>
          {/* <a href={process.env.REACT_APP_LOGOUT}>Logout</a> */}
        </div>
      </div>
    ) : (
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div className="header">
          <button
            onClick={() =>
              alert(
                `${"Please dial 911 or Crisis Hotline, if you feel like you will hurt yourself or others or need immediately help, "}`
              )
            }
          >
            9Line/Help
          </button>
          <Link to="/about">About</Link>
          <Link to="/chat">
            <p>Chat</p>
            {/* <Link to="/firstpage">FirstPage</Link> */}
          </Link>
          {/* <a href="http://localhost:3001/login">Login</a> */}
          <a href={process.env.REACT_APP_LOGINALL}>Login</a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getOneUser }
)(Header);
