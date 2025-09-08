import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import withScroll from '../components/HOC/withScroll';

const Criterios = (props) => {
  const { DIC } = props;

  return (
    <div className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_CRITERIOS}
        meta={[
          { name: 'description', content: `${DIC.NAV_CRITERIOS}` },
          { property: 'og:title', content: `${DIC.NAV_CRITERIOS}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_CRITERIOS}</h1>
      </header>
      <article className="app-section-width">
        <p className="txt-left">
          <strong className="txt-highlight">
            Criterios de lectura para el jurado:&nbsp;
          </strong>
          la “calidad” de la lectura se determinará según los siguientes
          criterios:
        </p>
        <ul>
          {' '}
          <strong className="txt-highlight">
            <li>Pronunciación / entonación</li>
            <li>Comprensión / interpretación</li>{' '}
          </strong>
        </ul>
        <p className="txt-left">
          La puntuación será de 1 a 5 para cada una de las tres categorías,
          siendo 5 la puntuación máxima.
        </p>
        <p className="txt-left">
          <strong className="txt-highlight">
            Pronunciación y entonación:&nbsp;
          </strong>
          Se valorará la pronunciación clara y correcta (en los niveles A1 y A2
          no se tendrán en cuenta las deficiencias en la pronunciación de la
          “r/rr”), la acentuación correcta y la velocidad de lectura. No se
          penalizará la autocorrección.
        </p>
        <p className="txt-left">
          <strong className="txt-highlight">
            Comprensión e interpretación:&nbsp;
          </strong>
          El candidato demuestra la comprensión de lo leído mediante una
          segmentación correcta de las frases y el uso adecuado de los recursos
          prosódicos. Así mismo, consigue reflejar el tono y el contexto
          ambiental de la lectura.
        </p>
      </article>
    </div>
  );
};

Criterios.propTypes = {
  DIC: PropTypes.object.isRequired,
};

const CriteriosWithScroll = withScroll(Criterios);

export const Unwrapped = Criterios;
export default CriteriosWithScroll;
