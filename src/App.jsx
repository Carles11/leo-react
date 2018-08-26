import React from 'react'
import Helmet from 'react-helmet'

import Navigation from './components/Navigation'
import Routes from './Routes.jsx'
import Footer from './components/Footer'

import './css/App.css'
import getDictionary from './utils/dictionary'

const DIC = getDictionary()

const NAV = [
  {
    label: DIC.NAV_INFO,
    children: [
      DIC.NAV_BASES,
      DIC.NAV_TEXTOS,
      DIC.NAV_CRITERIOS,
      DIC.NAV_CONCURSO,
      DIC.NAV_CERTIFICADOS,
      DIC.NAV_COLEGIOS,
    ],
  },
  { label: DIC.NAV_GALERIA, children: [] },
  { label: DIC.NAV_INSCRIPCION, children: [] },
]

const App = () => 
  <React.Fragment>
    <Helmet titleTemplate={`%s | ${DIC.NAME} - ${DIC.DESCRIPTION}`} defaultTitle={`${DIC.NAME} - ${DIC.DESCRIPTION}`} >
      <meta name="description" content={DIC.DESCRIPTION} />
    </Helmet>
    <Navigation nav={NAV} />
    <Routes DIC={DIC} />
    <Footer />
  </React.Fragment>


export default App
