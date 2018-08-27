import React from "react";
import { Redirect } from "react-router-dom";

import API from "../utils/API"
import SignIn from "../components/SignIn";
import withAuth from '../components/withAuth'
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
    } else {
      console.log(result)
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

const AdminWithAuth = withAuth(Admin)

export default AdminWithAuth;
