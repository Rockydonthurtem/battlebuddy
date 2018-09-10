import React, { Component } from "react";
import "./App.css";
import Chat from "./chat/Chat";
import { Provider } from "react-redux";
import store from "./ducks/store";
import GetUsers from "./components/GetUsers";
import NewUsers from "./components/NewUsers";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Chat />
          <GetUsers />
          <NewUsers />
        </div>
      </Provider>
    );
  }
}

export default App;
