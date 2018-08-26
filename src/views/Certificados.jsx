import React from 'react'
import Helmet from 'react-helmet'

const Certificados = props => {
  const { DIC } = props

  return (
    <div className="app-content">
      <Helmet 
        title={DIC.NAV_CERTIFICADOS} 
        meta={[
          { name:"description", content: `${DIC.NAV_CERTIFICADOS}` },
          { property: "og:title", content: `${DIC.NAV_CERTIFICADOS}` }
        ]}
      />
      <h1>{DIC.NAV_CERTIFICADOS} </h1>
    </div>
  )
}

export default Certificados