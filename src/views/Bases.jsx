import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import withScroll from '../components/HOC/withScroll';

const Bases = (props) => {
  const { DIC } = props;
  // const currentYear = new Date();
  // const nextYearEdition = currentYear.getFullYear() + 1;
  return (
    <section className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_BASES}
        meta={[
          { name: 'description', content: `${DIC.NAV_BASES}` },
          { property: 'og:title', content: `${DIC.NAV_BASES}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_BASES}</h1>
      </header>
      <article className="app-section-width">
        <p className="txt">Estimados/as compañeros/as:</p>
        <p className="txt txt-inline">{DIC.CONCURSO_BASES_TITLE}</p>

        <p className="txt ">
          A continuación encontraréis las bases del concurso, el proceso de
          selección de candidatos e información general sobre las semifinales
          eliminatorias y la final regional, que tendrá lugar el día{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}</strong>{' '}
          en la sede de Fráncfort del Instituto Cervantes. La fecha límite para
          la inscripción de los colegios participantes será el{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}</strong>
          . Para confirmar que el colegio ha quedado correctamente inscrito, hay
          que revisar la lista de{' '}
          <Link to="/colegios-inscritos">Colegios inscritos</Link> en la pestaña
          “Información para profesores” de la página web del concurso. Con este
          fin no se envian correos de confirmación.
        </p>

        <p>{DIC.CONCURSO_BASES_PARAGRAPH_2}</p>
      </article>
      <hr className="hr-margin" />
      <article>
        <ol className="app-section-width app-olist">
          <li className="app-olist-item">
            <p className="txt txt-inline">
              Cada uno de los colegios participantes habrá realizado hasta el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_INSCRIPTION_DUE}`}
              </strong>{' '}
              la selección interna de sus candidatos para la semifinal,{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_3}
            </p>
            <p>{DIC.CONCURSO_BASES_PARAGRAPH_3_bis}</p>
          </li>
          {/* 2. NIVELES DE PARTICIPACION */}
          <li className="app-olist-item">
            <strong className="txt-highlight">
              Niveles de participación:&nbsp;
            </strong>
            <p className="txt txt-inline">
              Se establecen cuatro niveles de participación, definidos según el
              Marco Europeo de Referencia para las Lenguas (MCER):
              <strong className="txt-highlight">
                &nbsp;A1, A2, B1 y B2.&nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_4}
            </p>
            <br />
            <p className="txt txt-inline">
              La edad de los participantes será tenida en cuenta por el jurado a
              la hora de puntuar, ya que por el desarrollo intrínseco del alumno
              la competencia lectora -tanto en la lengua materna como en la
              extranjera- mejora con la edad. La edad máxima para participar
              será de <strong className="txt-highlight">&nbsp;16 años.</strong>.
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_5}</p>
          </li>
          {/* 3.TEXTOS */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Textos:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_6}{' '}
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                TEXTOS A LEER EN LA FINAL: &nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_7}
            </p>
            <p className="txt">
              {' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_7_bis}{' '}
              </strong>
            </p>
            <p className="txt">
              {' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_8}{' '}
              </strong>
            </p>
            <p className="txt">
              IMPORTANTE:{' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_9}
              </strong>
            </p>
          </li>
          {/* 4.JURADO */}

          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Jurado:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_10}
            </p>
            <p className="txt">
              Los miembros del jurado tendrán que entregar la puntuación de cada
              candidato antes de la suma de los puntos.
            </p>
          </li>
          {/* 5. PUBLICO */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Público:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_11}
            </p>
          </li>
          <li className="app-olist-item">
            <strong className="txt-highlight">Premios:&nbsp;</strong>
            <p className="txt txt-inline">{DIC.CONCURSO_BASES_PARAGRAPH_12}</p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Proceso de selección de candidatos:
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_13}
            </p>

            <p className="txt">
              La «calidad» de la lectura se determinará según los siguientes dos
              criterios:
            </p>
            <ul>
              <li>Pronunciación / entonación</li>
              <li>Comprensión / interpretación</li>
            </ul>
            <p className="txt">
              La puntuación será de 1 a 5, para cada una de las tres categorías,
              siendo 5 el máximo.
            </p>
            <ul>
              <li>
                {' '}
                <strong className="txt-highlight">
                  Pronunciación / entonación{' '}
                </strong>{' '}
                {DIC.CONCURSO_BASES_PARAGRAPH_14}
              </li>
              <li>
                {' '}
                <strong className="txt-highlight">
                  Comprensión / interpretación{' '}
                </strong>{' '}
                {DIC.CONCURSO_BASES_PARAGRAPH_15}
              </li>
            </ul>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Semifinales:&nbsp;</strong>
              Las Semifinales se habrán celebrado antes del{' '}
              <strong className="txt-highlight">
                {` ${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}. `}
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_16}
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_17}</p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_18}</p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Semifinal Latinoamérica: &nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_19}
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}`}{' '}
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_20}
              <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}</strong>
              . La inscripción tendrá lugar a través de la página{' '}
              <a href="https://www.leo-leo-hessen.com">{DIC.CONCURSO_WEB}</a>.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Semifinal ALCE:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_21}
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}
              </strong>
              .
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Página web:&nbsp;</strong>
              El concurso cuenta con una página web{' '}
              <a href="https://www.leo-leo-hessen.com">
                {DIC.CONCURSO_WEB}
              </a>{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_22}
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Inscripción:&nbsp;</strong>
              Tendrá lugar hasta el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}
              </strong>{' '}
              y se realizará{' '}
              <strong className="txt-highlight">
                exclusivamente a través de la página web{' '}
              </strong>
              . Para la Semifinal Latinoamérica también se utilizará este medio.
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_23}</p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Alternativa virtual:&nbsp;
              </strong>
              Desde la pandemia Covid-19 se ofrece una{' '}
              <strong className="txt-highlight">
                una alternativa digital para la realización de las semifinales
                regionales
              </strong>
              , la final del {DIC.CONCURSO_EDICION_FINAL_NEXT_DATE} se realizará
              de forma presencial en el salón de actos del Instituto Cervantes
              de Fráncfort.
            </p>
            <p>
              En caso de que el alumnado no pueda encontrarse para una lectura
              presencial de los textos para alguna de las semifinales, y para
              evitar problemas técnicos o posibles irregularidades durante la
              lectura, los/las candidatos/as lectores se conectarán a las
              videoconferencias &nbsp;
              <strong className="txt-highlight">
                desde su centro escolar en compañía de su profesor/a de español
              </strong>
              , quien avalará el cumplimiento de las normas establecidas.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Protección de datos:&nbsp;
              </strong>
              Los centros inscritos{' '}
              <strong className="txt-highlight">
                se asegurarán de poseer la autorización{' '}
              </strong>
              de los padres del alumnado que participen para la posible
              publicación de sus fotos en la página web del concurso una vez
              terminada la final.
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_24}</p>
          </li>
        </ol>
      </article>
    </section>
  );
};

Bases.propTypes = {
  DIC: PropTypes.object.isRequired,
};

const BasesWithScroll = withScroll(Bases);
export const Unwrapped = Bases;

export default BasesWithScroll;
