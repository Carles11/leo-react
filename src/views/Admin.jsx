import React from 'react'
import { Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import SignIn from '../components/SignIn'

class Admin extends React.Component {
  state = {
    auth: false,
    checked: false
  }

  handleData = data => {
    console.log(data)
  }

  componentDidMount() {
    const auth = localStorage.getItem('token') ? true : false 
    
    setTimeout(() => {
      this.setState({ checked: true, auth })
    }, 1000);
  }

  render() {
    const { auth, checked } = this.state

    return (
      <React.Fragment>
        {!checked && <Loader css={'h100'} />}
        {checked && !auth && <SignIn handleSubmit={this.handleData} />}
        {checked && auth && <Redirect to="/admin-panel" />}
      </React.Fragment>
    )
  }
}

export default Admin
