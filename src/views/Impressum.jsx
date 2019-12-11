import React from 'react'
import Helmet from 'react-helmet'

import Button from '../components/Button'

const Impressum = props => {
  const { DIC } = props
  const style = {
    listStyleType: 'none',
    textAlign: 'center',
    padding: '2rem',
  }
  const marginTop = {
    marginTop: '2rem',
  }
  return (
    <section className='app-content pb2rem mb2rem'>
      <Helmet
        title={DIC.NAV_IMPRESSUM}
        meta={[
          { name: 'description', content: `${DIC.NAV_IMPRESSUM}` },
          { property: 'og:title', content: `${DIC.NAV_IMPRESSUM}` },
        ]}
      />
      <header>
        <h1 className='tit-header'>{DIC.NAV_IMPRESSUM}</h1>
      </header>
      <article>
        <p className='txt txt-inline'>
          <ul style={style} className='app-section-width'>
            <li>
              <strong className='txt-highlight'>Celia Cid Sánchez</strong>
            </li>
            <li>Wolfsgartenallee 8 </li>
            <li>64331 Weiterstadt</li> <li>Tel.: +49 (0) 611 368 -0 </li>{' '}
            <li>E-Mail: c.cid@hws.schule</li>
            <div style={marginTop}>
              <Button
                label='Volver a la página de inicio'
                link='/'
                external={false}
              />
            </div>
          </ul>
        </p>
      </article>
    </section>
  )
}

export default Impressum
