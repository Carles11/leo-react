import React from 'react';
import Button from './Button';

import logoAecid from '../assets/imgs/logo-aecid.png';
import logoHessen from '../assets/imgs/logo-hessen.png';
import logoHws from '../assets/imgs/logo-hws.jpg';
import logoIc from '../assets/imgs/logo-ic.jpg';

import logoArgentina from '../assets/imgs/logo-argentina.jpg';
import logoCastillaLeon from '../assets/imgs/logo-castilla-y-leon.png';
import logoChile from '../assets/imgs/logo-chile.png';
import logoColombia from '../assets/imgs/logo-colombia.jpg';
import logoMexico from '../assets/imgs/logo-mexico.png';
import logoPeru from '../assets/imgs/logo-peru.jpg';
import logoVenezuela from '../assets/imgs/logo-venezuela.png';
import logoRepublicaDominicana from '../assets/imgs/Logo-republica-dominicana.png';

import logoCornelsen from '../assets/imgs/logo-cornelsen.jpg';
import logoDsv from '../assets/imgs/logo-dsv.png';
import logoEdinumen from '../assets/imgs/logo-edinumen.jpg';
import logoKartenIDEE from '../assets/imgs/logo-Karten-Ideen.jpg';
import logoKlett from '../assets/imgs/logo-klett.jpg';
import logoSm from '../assets/imgs/logo-sm.jpg';
import logoColegioDelibes from '../assets/imgs/logo-colegio-delibes.png';

const Footer = (props) => {
  const { DIC, FOOTER_DATA } = props;

  const currentYearFooter = `${new Date().getFullYear()}  ${DIC.HEADER_MAIN}`;

  return (
    <footer className="app-footer">
      <div className="app-footer-wrapper w1280">
        <ul className="app-footer-links">
          {FOOTER_DATA.map((item) => (
            <li key={item.label}>
              <Button
                label={item.label}
                link={item.url}
                external={!!item.external}
              />
            </li>
          ))}
          <li>
            <a
              className="btn-link"
              href="mailto:c.cid@hws.schule?subject=Concurso 'Leo, leo... ¿Qué lees?'"
              aria-label="Correo de contacto"
            >
              Contacto
              <span className="line">
                <span />
                <span />
              </span>
            </a>
          </li>
          <li>
            <span>
              &copy;&nbsp;
              {currentYearFooter}
            </span>
          </li>
        </ul>
        <section className="app-footer-imgs">
          <h3>{DIC.SPONSOR}</h3>
          <article>
            <a
              href="https://kultusministerium.hessen.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web del Ministerio de cultura de Hessen"
            >
              <img src={logoHessen} alt="Hessen" />
            </a>
            <a
              href="https://www.hessenwaldschule.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de la Hessenwaldschule"
            >
              <img src={logoHws} alt="Hessenwaldschule" />
            </a>
            <a
              href="https://frankfurt.cervantes.es/de/start.shtm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web del Instituto Cervantes de Frankfurt"
            >
              <img src={logoIc} alt="Instituto Cervantes" />
            </a>

            <a
              href="http://www.aecid.es/ES"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de AECID (cooperación)"
            >
              <img src={logoAecid} alt="AECID (cooperación)" />
            </a>
            <a
              href="https://www.hispanorama.de/landesverbaende/hessen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de Spanisch Deutsch Lehrerverband"
            >
              <img src={logoDsv} alt="SDV" />
            </a>

            <a
              href="http://alemania.embajada.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de la embajada de Colombia"
            >
              <img src={logoColombia} alt="Cancillería (Colombia)" />
            </a>
            <a
              href="https://consulmex.sre.gob.mx/frankfurt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web del consulado de México"
            >
              <img src={logoMexico} alt="Consulado de México" />
            </a>
            <a
              href="https://www.chile.gob.cl/frankfurt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de la embajada de Chile"
            >
              <img src={logoChile} alt="Consulado de Chile" />
            </a>
            <a
              href="http://www.consulado.pe/es/frankfurt/Paginas/Inicio.aspx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de Consulado del Perú en Frankfurt"
            >
              <img src={logoPeru} alt="Klett" />
            </a>
            <a
              href="http://www.consulado-venezuela-frankfurt.de/de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de la embajada de la República Bolivariana de Venezuela"
            >
              <img src={logoVenezuela} alt="Consulado de Venezuela" />
            </a>
            <a
              href="https://cfran.cancilleria.gob.ar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de Consulado de Argentina en Frankfurt"
            >
              <img src={logoArgentina} alt="Klett" />
            </a>
            <a
              href="http://www.consuladodominicanoff.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web del Consulado General de la República Dominicana en Frankfurt"
            >
              <img src={logoRepublicaDominicana} alt="Klett" />
            </a>
            <a
              href="https://www.jcyl.es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web de Castilla y León"
            >
              <img src={logoCastillaLeon} alt="Klett" />
            </a>

            <p>
              {/* <a
                href="http://www.lesbar-die-buchhandlung.de/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de la Buchhandlung Lesbar"
              >
                <img src={logoLesbar} alt="Buchhandlung Lesbar" />
              </a> */}
              <a
                href="https://www.karten-ideen.de/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de Karten IDEE"
              >
                <img src={logoKartenIDEE} alt="logo Karten IDEE" />
              </a>
            </p>
            <p>
              <a
                href="https://www.grupo-sm.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web del grupo SM"
              >
                <img src={logoSm} alt="Grupo SM" />
              </a>
              <a
                href="https://www.cornelsen.de/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de Cornelsen"
              >
                <img src={logoCornelsen} alt="Cornelsen" />
              </a>
              <a
                href="https://edinumen.es/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de Edinumen"
              >
                <img src={logoEdinumen} alt="Edinumen" />
              </a>
              <a
                href="https://www.klett.de/index/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de Klett"
              >
                <img src={logoKlett} alt="Klett" />
              </a>
              <a
                href="https://www.colegiodelibes.es/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a la página web de Colegio Delibes"
              >
                <img src={logoColegioDelibes} alt="Colegio Delibes" />
              </a>
            </p>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
