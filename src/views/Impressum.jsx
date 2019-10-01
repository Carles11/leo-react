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
              <strong className='txt-highlight'>
                Land Hessen Hessisches Kultusministerium
              </strong>
            </li>
            <li>Luisenplatz 10 65185 Wiesbaden </li>{' '}
            <li>Telefon und Fax Tel.: +49 (0) 611 368 -0 </li>
            <li>Fax.: +49 (0) 611 368 -2099</li>{' '}
            <li>E-Mail: poststelle.hkm@kultus.hessen.de</li>
            <li>
              Das Land Hessen ist eine Körperschaft des öffentlichen Rechts.
              Vertretungsberechtigt ist der hessische Ministerpräsident. Die
              Umsatzsteueridentifikationsnummer für den Geschäftsbereich des
              Hessischen Kultusministerium: DE270134985
            </li>
            <Button
              label='Volver a la página de inicio'
              link='/'
              external={false}
            />
          </ul>
        </p>
      </article>
    </section>
  )
}

export default Impressum
