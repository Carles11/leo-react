import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// import withScroll from '../components/HOC/withScroll';
import CuadroGanadores from '../assets/docs/impresos/Cuadro_ganadores.docx';
import PuntosJurado from '../assets/docs/impresos/Impreso_puntos_para_el_jurado.docx';
import Einwilligung from '../assets/docs/Datenschuetzerklaerung_SCHULEN_edit_signature.pdf';

const Impresos = (props) => {
  const { DIC } = props;

  return (
    <div className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_IMPRESOS}
        meta={[
          { name: 'description', content: `${DIC.NAV_IMPRESOS}` },
          { property: 'og:title', content: `${DIC.NAV_IMPRESOS}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_IMPRESOS}</h1>
      </header>
      <article className="app-section-width">
        <p className="txt txt-center">
          <strong className="txt-subtitle">
            Descarga aquí los impresos para tu escuela:&nbsp;
          </strong>
        </p>
      </article>

      <article>
        <ul className="app-list">
          <li key="ganadores" className="app-list-item">
            <header className="app-list-header">
              <h2>Cuadro de ganadores</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el texto 'Cuadro de ganadores'`}
                  download={CuadroGanadores}
                  href={CuadroGanadores}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el texto 'Cuadro de ganadores'`}
                >
                  <span className="hidden">
                    {`Descargar el texto 'Cuadro de ganadores'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li key="puntos-jurado" className="app-list-item">
            <header className="app-list-header">
              <h2>Impreso de puntos para el jurado</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el texto 'Impreso de puntos para el jurado'`}
                  download={PuntosJurado}
                  href={PuntosJurado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el texto 'Impreso de puntos para el jurado'`}
                >
                  <span className="hidden">
                    {`Descargar el texto 'Impreso de puntos para el jurado'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li key="datenschuetzerklaerung" className="app-list-item">
            <header className="app-list-header">
              <h2>Datenschützerklärung</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el texto 'Datenschützerklärung'`}
                  download={Einwilligung}
                  href={Einwilligung}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el texto 'Datenschützerklärung'`}
                >
                  <span className="hidden">
                    {`Descargar el texto 'Datenschützerklärung'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
        </ul>
      </article>
    </div>
  );
};

Impresos.propTypes = {
  DIC: PropTypes.object.isRequired,
};

// const ImpresosWithScroll = withScroll(Impresos);

// export const Unwrapped = Impresos;
export default Impresos;
