import React, { Component } from "react";
import "./App.css";
import Chat from "./chat/Chat";
import { Provider } from "react-redux";
import store from "./ducks/store";
import GetUsers from "./components/GetUsers";
import NewUsers from "./components/NewUsers";
import Map from "./components/googleMap/Map";
import Location from "./components/Location";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Chat />
          <GetUsers />
          <NewUsers />
          <Location />
          <Map />
        </div>
      </Provider>
    );
  }
}

export default App;
