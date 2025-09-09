import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

// import withScroll from '../components/HOC/withScroll';
import Einwilligung from '../assets/docus/Datenschuetzerklaerung_SCHULEN_edit_signature.pdf';
import CuadroGanadores from '../assets/docus/impresos/Cuadro_ganadores.docx';
import PuntosJurado from '../assets/docus/impresos/Impreso_puntos_para_el_jurado.docx';
import ControlList from '../assets/docus/impresos/Lista_de_control.docx';
import CertificadoGenericoEditable from '../assets/docus/impresos/leo-leo_Bescheinigung_generico_CAMPOS_EDITABLES_lowRes.pdf';
import QRdescargable from '../assets/docus/QR_Leo, leo.png';
import LogoDescargable from '../assets/docus/nuevo-logo-leo-leo.png';
import LogoSoloDescargable from '../assets/docus/nuevo-logo-leo-leo-solo.docx';
import CartelDescargable2025 from '../assets/docus/cartel-SF-LATAM-2025.png';
// import logo from '../assets/imgs/leo/logo.png';

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
            Descarga aquí los impresos para tu colegio:&nbsp;
          </strong>
        </p>
      </article>

      <article>
        <ul className="app-list">
          <li key="ganadores" className="app-list-item ml5r mr5r">
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
          <li key="puntos-jurado" className="app-list-item  ml5r mr5r">
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
          <li key="datenschuetzerklaerung" className="app-list-item  ml5r mr5r">
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
          <li key="lista-de-control" className="app-list-item  ml5r mr5r">
            <header className="app-list-header">
              <h2>Lista de control para escuelas (check-list)</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el texto 'Datenschützerklärung'`}
                  download={ControlList}
                  href={ControlList}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el texto 'ControlList'`}
                >
                  <span className="hidden">
                    {`Descargar el texto 'ControlList'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li
            key="certificado-genérico-editable"
            className="app-list-item  ml5r mr5r"
          >
            <header className="app-list-header">
              <h2>Certificado genérico editable</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el documento 'Certificado genérico editable'`}
                  download={CertificadoGenericoEditable}
                  href={CertificadoGenericoEditable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el documento 'Certificado genérico editable'`}
                >
                  <span className="hidden">
                    {`Descargar el documento 'Certificado genérico editable'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li
            key="certificado-genérico-editable"
            className="app-list-item  ml5r mr5r"
          >
            <header className="app-list-header">
              <h2>QR descargable</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el documento 'QR descargable'`}
                  download={QRdescargable}
                  href={QRdescargable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el documento 'QR descargable'`}
                >
                  <span className="hidden">
                    {`Descargar el documento 'QR descargable'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li
            key="certificado-genérico-editable"
            className="app-list-item  ml5r mr5r"
          >
            <header className="app-list-header">
              <h2>Logo descargable</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el 'Logo descargable'`}
                  download={LogoDescargable}
                  href={LogoDescargable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el 'Logo descargable'`}
                >
                  <span className="hidden">
                    {`Descargar el 'Logo descargable'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li
            key="certificado-genérico-editable"
            className="app-list-item  ml5r mr5r"
          >
            <header className="app-list-header">
              <h2>Logo descargable (solo logo)</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el 'Logo descargable'`}
                  download={LogoSoloDescargable}
                  href={LogoSoloDescargable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el 'Logo descargable'`}
                >
                  <span className="hidden">
                    {`Descargar el 'Logo descargable'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          <li
            key="certificado-genérico-editable"
            className="app-list-item  ml5r mr5r"
          >
            <header className="app-list-header">
              <h2>Cartel descargable (2025)</h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el 'Cartel descargable (2025)'`}
                  download={CartelDescargable2025}
                  href={CartelDescargable2025}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el 'Cartel descargable (2025)'`}
                >
                  <span className="hidden">
                    {`Descargar el 'Cartel descargable (2025)'`}
                  </span>
                </a>
              </div>
            </header>
          </li>
          {/* <li key="logo-leo" className="app-list-item  ml5r mr5r">
            <header className="app-list-header">
              <h2>Logo </h2>
              <div className="app-list-content-btn">
                <a
                  aria-label={`Descargar el texto ‟Leo, leo… ¿Qué lees ?”`}
                  download={logo}
                  href={logo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-list-btn icon-arrow-down-circle"
                  title={`Descargar el texto ‟Leo, leo… ¿Qué lees ?”`}
                >
                  <span className="hidden">
                    {`Descargar el texto ‟Leo, leo… ¿Qué lees ?”`}
                  </span>
                </a>
              </div>
            </header>
          </li> */}
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
