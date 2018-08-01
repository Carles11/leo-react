import React from 'react'
import Helmet from 'react-helmet'

const Colegios = props => {
  const { DIC } = props

  return (
    <div className="app-main">
      <Helmet 
        title={DIC.NAV_COLEGIOS} 
        meta={[
          { name:"description", content: `${DIC.NAV_COLEGIOS}` },
          { property: "og:title", content: `${DIC.NAV_COLEGIOS}` }
        ]}
      />
      <h1>{DIC.NAV_COLEGIOS} </h1>
    </div>
  )
}

export default Colegios