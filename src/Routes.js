import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './views/Landing'
import NotFound from './views/NotFound'

const Routes = props => {
  const { DIC } = props
  console.log('Routes', DIC)
  return (
    <Switch>
    <Route exact path="/" render={ props => <Landing {...props} DIC={DIC} /> } />
    <Route render={props => <NotFound {...props} />} />
  </Switch>
  )
}
  

export default Routes