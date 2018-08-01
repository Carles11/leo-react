import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Concurso from '../components/Concurso'
import Galeria from '../components/Galeria'

const Landing = props => {
  const { DIC } = props
  
  return (
    <div className="app-main">
      <Helmet 
        title={DIC.DESCRIPTION} 
        meta={[
          { name:"description", content: `${DIC.DESCRIPTION}` },
          { property: "og:title", content: `${DIC.DESCRIPTION}` }
        ]}
      />
      <Header DIC={DIC} />
      <Concurso DIC={DIC} />
      <Galeria />
    </div>
  )
}
  
export default Landing