import React from "react";
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom";

import * as API from "../utils/API"
import SignIn from "../components/SignIn";
import config from '../config'

class Admin extends React.Component {
  state = {
    message: '',
    next: false
  }

  handleData = async data => {
    const promise = await API.post('signin-leo', data, true)

    if (promise.success) {
      localStorage.setItem(config.api.API_TOKEN, promise.data)
      this.props.checkAuth()
    } else {
      this.setState({ message: promise.data, next: true })
    }
  };

  render() {
    const { message, next } = this.state
    const { auth } = this.props;

    return (
      <React.Fragment>
        {!auth && <SignIn handleSubmit={this.handleData} message={message} next={next} />}
        {auth && <Redirect to="/admin-panel" />}
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  auth: PropTypes.bool.isRequired
}

export default Admin;
