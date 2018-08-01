import React from 'react'
import Helmet from 'react-helmet'

const Lectura = props => {
  const { DIC } = props

  return (
    <div className="app-main">
      <Helmet 
        title={DIC.NAV_TEXTOS} 
        meta={[
          { name:"description", content: `${DIC.NAV_TEXTOS}` },
          { property: "og:title", content: `${DIC.NAV_TEXTOS}` }
        ]}
      />
      <h1>{DIC.NAV_TEXTOS} </h1>
    </div>
  )
}

export default Lectura