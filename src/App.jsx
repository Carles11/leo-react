import React from 'react'
import Helmet from 'react-helmet'

import Navigation from './components/Navigation'
import Routes from './Routes.jsx'
import Footer from './components/Footer'
import withAuth from './components/HOC/withAuth'

import './css/App.css'
import getDictionary from './utils/dictionary'

const DIC = getDictionary()

const App = props => 
  <React.Fragment>
    <Helmet titleTemplate={`%s | ${DIC.NAME} - ${DIC.DESCRIPTION}`} defaultTitle={`${DIC.NAME} - ${DIC.DESCRIPTION}`} >
      <meta name="description" content={DIC.DESCRIPTION} />
    </Helmet>
    <Navigation {...props} DIC={DIC} />
    <Routes {...props} DIC={DIC} />
    <Footer />
  </React.Fragment>

const AppWithApp = withAuth(App)

export default AppWithApp
