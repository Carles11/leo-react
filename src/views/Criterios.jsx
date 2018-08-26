import React from 'react'
import Helmet from 'react-helmet'

const Criterios = props => {
  const { DIC } = props

  return (
    <div className="app-content">
      <Helmet 
        title={DIC.NAV_CRITERIOS} 
        meta={[
          { name:"description", content: `${DIC.NAV_CRITERIOS}` },
          { property: "og:title", content: `${DIC.NAV_CRITERIOS}` }
        ]}
      />
      <h1>{DIC.NAV_CRITERIOS} </h1>
    </div>
  )
}

export default Criterios