import React from 'react'

const Semifinal = props => {
  return (
    <div className='app-content pb2rem mb2rem'>
      <Helmet
        title={DIC.NAV_CRITERIOS}
        meta={[
          { name: 'description', content: `${DIC.NAV_CRITERIOS}` },
          { property: 'og:title', content: `${DIC.NAV_CRITERIOS}` },
        ]}
      />
      <header>
        <h1 className='tit-header mb2rem'>{DIC.NAV_CRITERIOS}</h1>
      </header>
    </div>
  )
}

export default Semifinal
