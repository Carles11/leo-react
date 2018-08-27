import React from 'react'
import { Redirect } from 'react-router-dom'

import withAuth from '../components/withAuth'

class AdminPanel extends React.Component {

  render() {
    const { auth } = this.props

    return (
      <React.Fragment>
        {!auth && <Redirect to="/admin" />}
        {auth &&
          <section className="app-content">
            <header>
              <h1>Admin Panel</h1>
            </header>
          </section>
        }
      </React.Fragment>
    )
  }
}

const AdminPanelWithAuth = withAuth(AdminPanel)

export default AdminPanelWithAuth