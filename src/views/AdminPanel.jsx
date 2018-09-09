import React from 'react'
import { Redirect } from 'react-router-dom'

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

export default AdminPanel