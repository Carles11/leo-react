import React from "react";
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
    const promise = await API.post('signin', data, true)
    const result = await promise.json()

    if (result.success) {
      localStorage.setItem(config.api.API_TOKEN, result.data)
      this.props.checkAuth()
      console.log('Admin Component -> ', this.props)
    } else {
      this.setState({ message: result.data, next: true})
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

export default Admin;
