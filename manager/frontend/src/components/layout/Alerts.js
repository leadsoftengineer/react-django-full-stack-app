//KYIV MEDIA 17.12.2019
import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

export class Alerts extends Component {
  componentDidMount() {
    this.props.alert.show("it works");
  }

  render() {
    return <Fragment />;
  }
}

export default withAlert(Alerts);
