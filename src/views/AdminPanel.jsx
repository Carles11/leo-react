import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import AdminList from '../components/AdminList'

const AdminPanel = (props) => {
  const { auth } = props

  return (
    <React.Fragment>
      {!auth && <Redirect to="/admin" />}
      {auth && (
      <section className="app-content">
        <AdminList type="schools" />
      </section>
      )}
    </React.Fragment>
  )
}

AdminPanel.propTypes = {
  auth: PropTypes.bool.isRequired,
}

export default AdminPanel
