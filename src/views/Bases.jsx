import React from 'react'
import Helmet from 'react-helmet'

const Bases = props => {
  const { DIC } = props

  return (
    <div className="app-main">
      <Helmet 
        title={DIC.NAV_BASES} 
        meta={[
          { name:"description", content: `${DIC.NAV_BASES}` },
          { property: "og:title", content: `${DIC.NAV_BASES}` }
        ]}
      />
      <h1>{DIC.NAV_BASES} </h1>
    </div>
  )
}

export default Bases