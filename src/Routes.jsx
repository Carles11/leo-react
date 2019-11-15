import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import RoutesAsync from './RoutesAsync'

const Routes = props => {
  const { DIC, auth, checkAuth } = props

  return (
    <Switch>
      <Route
        exact
        path='/'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Landing')}
          />
        )}
      />

      <Route
        path='/admin'
        component={props => (
          <RoutesAsync
            props={props}
            auth={auth}
            checkAuth={checkAuth}
            loadingPromise={import('./views/Admin')}
          />
        )}
      />

      <Route
        path='/admin-panel'
        component={props => (
          <RoutesAsync
            props={props}
            auth={auth}
            checkAuth={checkAuth}
            loadingPromise={import('./views/AdminPanel')}
          />
        )}
      />

      <Route
        path='/bases-del-concurso'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Bases')}
          />
        )}
      />

      <Route
        path='/textos-de-lectura'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Lectura')}
          />
        )}
      />

      <Route
        path='/criterios-de-lectura'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Criterios')}
          />
        )}
      />

      <Route
        path='/colegios-inscritos'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Colegios')}
          />
        )}
      />
      <Route
        path='/semifinal-latinoamericana'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Latinoamerica')}
          />
        )}
      />
      <Route
        path='/aviso-legal'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/AvisoLegal')}
          />
        )}
      />
      {/* <Route
        path='/impressum'
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/Impressum')}
          />
        )}
      /> */}
      <Route
        component={props => (
          <RoutesAsync
            props={props}
            DIC={DIC}
            loadingPromise={import('./views/NotFound')}
          />
        )}
      />
    </Switch>
  )
}

Routes.propTypes = {
  DIC: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
}

export default Routes
