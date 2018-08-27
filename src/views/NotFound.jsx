import React from 'react'
import Helmet from 'react-helmet'

const Landing = props => {
  const { DIC } = props

  return (
    <article className="app-section h725">
      <Helmet 
        title={DIC.NOTFOUND} 
        meta={[
          { name:"description", content: `${DIC.NOTFOUND}` },
          { property: "og:title", content: `${DIC.NOTFOUND}` }
        ]}
      />
      <h1>{DIC.NOTFOUND}</h1>
    </article>
    )
}
  

export default Landing