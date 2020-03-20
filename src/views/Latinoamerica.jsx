import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import withScroll from '../components/HOC/withScroll'

const Latinoamerica = props => {
  const { DIC } = props

  return (
    <div className='app-content pb2rem mb2rem'>
      <Helmet
        title={DIC.NAV_LATINOAMERICA}
        meta={[
          { name: 'description', content: `${DIC.NAV_LATINOAMERICA}` },
          { property: 'og:title', content: `${DIC.NAV_LATINOAMERICA}` },
        ]}
      />
      <header>
        <h1 className='tit-header mb2rem'>{DIC.NAV_LATINOAMERICA}</h1>
      </header>
      <article className='app-section-width'>
        <p className='txt'>
          <strong className='txt-highlight'>
            Semifinal Latinoamérica:&nbsp;
          </strong>
          Fruto de la colaboración con los Consulados Generales de México,
          Colombia, Chile y Perú se celebrará una semifinal B2 para alumnos
          procedentes de Latinoamérica. Para ello no será necesario ser poseedor
          de la nacionalidad del país latinoamericano que se represente. La SF se celebrará también en el Instituto Cervantes de Fráncfort el 25 de abril de 2020. Plazo de inscripción hasta el 23 de abril de 2020.
        </p>
        <p className='txt'>
          Para inscribirse a esta semifinal envíe un correo electrónico a{' '}
          <a
            href={`mailto:c.cid@hws.schule?subject=${DIC.NAV_LATINOAMERICA_SUBJECT}`}>
            <strong>c.cid@hws.schule</strong>
          </a>{' '}
          con los siguientes datos:
        </p>
        <ul>
          <li>Nombre y apellidos del concursante</li>
          <li>Edad</li>
          <li>País latinoamericano al que representa</li>
          <li>Persona de contacto</li>
          <li>E-Mail</li>
          <li>Dirección</li>
          <li>Teléfono</li>
        </ul>
      </article>
    </div>
  )
}

Latinoamerica.propTypes = {
  DIC: PropTypes.object.isRequired,
}

const LatinoamericaWithScroll = withScroll(Latinoamerica)

export const Unwrapped = Latinoamerica
export default LatinoamericaWithScroll
