//KYIV MEDIA 10.12.2019
import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import Header from "./layout/Header";
import Dashboard from "../components/leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
