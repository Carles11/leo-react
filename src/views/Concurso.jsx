import React from 'react'
import Helmet from 'react-helmet'

const Concurso = props => {
  const { DIC } = props

  return (
    <div className="app-main">
      <Helmet 
        title={DIC.NAV_CONCURSO} 
        meta={[
          { name:"description", content: `${DIC.NAV_CONCURSO}` },
          { property: "og:title", content: `${DIC.NAV_CONCURSO}` }
        ]}
      />
      <h1>{DIC.NAV_CONCURSO} </h1>
    </div>
  )
}

export default Concurso