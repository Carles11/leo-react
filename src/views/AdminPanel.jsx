import React from 'react'
import { Redirect } from 'react-router-dom'

import withAuth from '../components/withAuth'
import List from '../components/List'

const AdminPanel = props => {
  const { auth } = props

  return (
    <React.Fragment>
      {!auth && <Redirect to="/admin" />}
      {auth &&
        <section className="app-content">
          <header>
            <h1>Admin Panel</h1>
          </header>
          <List type={'schools'} />
        </section>
      }
    </React.Fragment>
  )
  
}

const AdminPanelWithAuth = withAuth(AdminPanel)

export default AdminPanelWithAuth