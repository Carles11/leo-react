import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import List from '../components/List'
import Button from '../components/Button'

const AdminPanel = props => {
  const { auth } = props

  return (
    <React.Fragment>
      {!auth && <Redirect to="/admin" />}
      {auth &&
        <section className="app-content">
          <header className="app-admin-title">
            <h1>Listado de escuelas</h1>
            <div>
              <Button label={'Imprimir en PDF'} css={'btn-invert'} />
            </div>
          </header>
          <List type={'schools'} />
        </section>
      }
    </React.Fragment>
  )
}

AdminPanel.propTypes = {
  auth: PropTypes.bool.isRequired
}

export default AdminPanel