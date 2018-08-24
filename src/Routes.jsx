import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './views/Landing'
import Admin from './views/Admin'
import AdminPanel from './views/AdminPanel'
import Bases from './views/Bases'
import Lectura from './views/Lectura'
import Criterios from './views/Criterios'
import Concurso from './views/Concurso'
import Certificados from './views/Certificados'
import Colegios from './views/Colegios'
import NotFound from './views/NotFound'

const Routes = (props) => {
  const { DIC } = props

  return (
    <Switch>
      <Route exact path="/" render={ props => <Landing {...props} DIC={DIC} /> } />
      <Route path="/admin" component={Admin} />
      <Route path="/admin-panel" component={AdminPanel} />
      <Route path="/bases-del-concurso" render={ props => <Bases {...props} DIC={DIC} /> } />
      <Route path="/textos-de-lectura" render={ props => <Lectura {...props} DIC={DIC} /> } />
      <Route path="/criterios-de-lectores" render={ props => <Criterios {...props} DIC={DIC} /> } />
      <Route path="/concurso" render={ props => <Concurso {...props} DIC={DIC} /> } />
      <Route path="/certificados" render={ props => <Certificados {...props} DIC={DIC} /> } />
      <Route path="/colegios-inscritos" render={ props => <Colegios {...props} DIC={DIC} /> } />
      <Route render={props => <NotFound DIC={DIC} />} />
    </Switch>
  )
}
  
export default Routes