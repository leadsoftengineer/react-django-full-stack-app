//KYIV MEDIA 19.12.2019
import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email}`);
      if (error.msg.message) alert.error(`Message: ${error.msg.message}`);
    }
    if (message !== prevProps.message) {
      if (message.leadAdded) alert.success(message.leadAdded);
      if (message.leadDeleted) alert.success(message.leadDeleted);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert(Alerts));
