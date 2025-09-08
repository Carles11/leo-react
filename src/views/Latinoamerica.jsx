import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import withScroll from '../components/HOC/withScroll';

const Latinoamerica = (props) => {
  const { DIC } = props;

  return (
    <div className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_LATINOAMERICA}
        meta={[
          { name: 'description', content: `${DIC.NAV_LATINOAMERICA}` },
          { property: 'og:title', content: `${DIC.NAV_LATINOAMERICA}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_LATINOAMERICA}</h1>
      </header>
      <article className="app-section-width">
        <p className="txt">
          <strong className="txt-highlight">
            Semifinal Latinoamérica:&nbsp;
          </strong>
          {DIC.SEMIFINAL_LATINOAMERICA_PARAGRAPH_1}&nbsp;
          <strong className="txt-highlight">
            {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}`}
          </strong>
          . El <strong className="txt-highlight">plazo de inscripción</strong>
          &nbsp;estará abierto hasta el&nbsp;
          <strong className="txt-highlight">
            {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}
          </strong>
          .
        </p>
        <p className="txt">
          Para inscribirse en esta semifinal, envíe un correo electrónico a{' '}
          <a
            href={`mailto:c.cid@hws.schule?subject=${DIC.NAV_LATINOAMERICA_SUBJECT}`}
          >
            <strong>c.cid@hws.schule</strong>
          </a>{' '}
          con los siguientes datos:
        </p>
        <ul>
          <li>Nombre y apellidos del concursante</li>
          <li>Edad</li>
          <li>País latinoamericano al que representa</li>
          <li>Persona de contacto</li>
          <li>Dirección de correo electrónico</li>
          <li>Dirección</li>
          <li>Teléfono</li>
        </ul>
        <p className="txt-left">
          {' '}
          <strong>
            No es necesario que el colegio o un profesor inscriba al candidato;
            también lo pueden hacer directamente los padres. La convocatoria se
            difundirá también a través de los consulados latinoamericanos en
            Hesse.
          </strong>
        </p>
      </article>
    </div>
  );
};

Latinoamerica.propTypes = {
  DIC: PropTypes.object.isRequired,
};

const LatinoamericaWithScroll = withScroll(Latinoamerica);

export const Unwrapped = Latinoamerica;
export default LatinoamericaWithScroll;
