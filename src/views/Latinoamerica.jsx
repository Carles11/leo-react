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
          {DIC.SEMIFINAL_LATINOAMERICA_PARAGRAPH_1} La SF se celebrará también
          en el Instituto Cervantes de Fráncfort el{' '}
          <strong className="txt-highlight">
            {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE_NO_IDEA_WHY}`}
          </strong>
          . Plazo de inscripción hasta el{''}{' '}
          <strong className="txt-highlight">
            {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}
          </strong>
          .
        </p>
        <p className="txt">
          Para inscribirse a esta semifinal envíe un correo electrónico a{' '}
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
          <li>E-mail</li>
          <li>Dirección</li>
          <li>Teléfono</li>
        </ul>
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
