import React, { Component } from "react";
import "./App.css";
// import Chat from "./components/chat/Chat";
import { Provider } from "react-redux";
import store from "./ducks/store";
// import GetUsers from "./components/GetUsers";
// import NewUsers from "./components/NewUsers";
// import Location from "./components/Location";
import { HashRouter } from "react-router-dom";
import route from "./components/routes";
// import AuthUser from "./components/AuthUsers";
// import Checkout from "./components/stripe/Checkout";
import Header from "./components/Header";
// import TextMessages from "./components/TextMessages";
// import Nodemailer from "./components/Nodemailer";
// import DemoApp from "./components/googleMap/whenItsTime";
// import SimpleMap from "./components/googleMap/whenItsTime";
// import Map from "./components/googleMap/Map";
// import Cluster from "./components/googleMap/Cluster";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            {route}
            <p>TURN ON LESS SECURE</p>
            {/* <Location /> */}
            {/* <Map /> */}
            {/* <Cluster /> */}
            {/* <SimpleMap /> */}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
