import React from 'react'
import Helmet from 'react-helmet'

import Button from '../components/Button'

const Impressum = props => {
  const { DIC } = props

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
        <h1 className='tit-header'>{DIC.NAV_IMPRESSUM} IMPRESSUM</h1>
      </header>
      <article className='app-column-center'>
        <p className='txt-center'>
          Land Hessen Hessisches Kultusministerium
          <br /> Luisenplatz 10
          <br />
          65185 Wiesbaden <br />
          Telefon und Fax Tel.: +49 (0) 611 368 -0 Fax.: +49 (0) 611 368 -2099{' '}
          <br />
          E-Mail: poststelle.hkm@kultus.hessen.de <br />
          Das Land Hessen ist eine Körperschaft des öffentlichen Rechts. <br />
          Vertretungsberechtigt ist der hessische Ministerpräsident. <br />
          Die Umsatzsteueridentifikationsnummer für den Geschäftsbereich des
          Hessischen Kultusministerium: DE270134985
        </p>
        <Button
          label='Volver a la página de inicio'
          link='/'
          external={false}
        />
      </article>
    </section>
  )
}

export default Impressum
