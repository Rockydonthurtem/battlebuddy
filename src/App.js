import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { HashRouter } from "react-router-dom";
import route from "./components/routes";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            {route}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
