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
          A continuación, encontraréis las bases del concurso, el proceso de
          selección de candidatos y candidatas, así como información general
          sobre las semifinales preeliminatorias y la final regional, que tendrá
          lugar el{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}</strong>{' '}
          en la sede de Fráncfort del Instituto Cervantes. La fecha límite para
          la inscripción de los colegios participantes será el{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}</strong>
          . Para confirmar que el colegio ha quedado correctamente inscrito,{' '}
          <strong className="txt-highlight">
            hay que revisar la lista de «
            <Link to="/colegios-inscritos">Colegios inscritos</Link>» en la
            pestaña «Información para profesores» de la página web del concurso.
            Con este fin no se enviarán correos de confirmación.
          </strong>
        </p>

        <p>{DIC.CONCURSO_BASES_PARAGRAPH_2}</p>
      </article>
      <hr className="hr-margin" />
      <article>
        <ol className="app-section-width app-olist">
          {/* 1. INSCRIPCIÓN */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Inscripción:&nbsp;</strong> El
              plazo de inscripción finalizará el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}
              </strong>{' '}
              y se realizará exclusivamente a través de la página web. Para la
              Semifinal Latinoamérica también se utilizará este medio. Para
              confirmar que el colegio ha quedado correctamente inscrito, hay
              que consultar la lista de colegios inscritos, ya que no se envían
              correos de confirmación.
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_3_bis}</p>
          </li>
          {/* 2. SELECCIÓN DE CANDIDATOS */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Selección de candidatos y candidatas:&nbsp;
              </strong>{' '}
              Cada uno de los colegios participantes habrá realizado hasta el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_INTERNAL_SELECTION_LIMIT}`}
              </strong>{' '}
              la selección interna de sus candidatos para la semifinal.{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_3}
            </p>
            {/* <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_3_bis}</p> */}
          </li>
          {/* 3. NIVELES DE LECTURA */}
          <li className="app-olist-item">
            <>
              <p className="txt txt-inline">
                {' '}
                <strong className="txt-highlight">
                  Niveles de lectura:&nbsp;
                </strong>
                Se establecen cuatro niveles de participación, definidos según
                el Marco Europeo de Referencia para las Lenguas:
                <strong className="txt-highlight">
                  &nbsp;A1, A2, B1 y B2.&nbsp;
                </strong>
              </p>
              <p className="txt txt-inline">{DIC.CONCURSO_BASES_PARAGRAPH_4}</p>
              <ul className="no-bullets more-space">
                <strong className="txt-highlight">
                  Primer año de aprendizaje de español como lengua extranjera:
                </strong>
                <li>Nivel A1: 6°/7° curso escolar como segunda lengua</li>
                <li style={{ marginBottom: '22px' }}>
                  Nivel A1: 9° curso escolar como tercera lengua
                </li>
                <strong className="txt-highlight">
                  Segundo año de aprendizaje de español como lengua extranjera:
                </strong>
                <li>Nivel A2: 8° curso escolar como segunda lengua</li>
                <li style={{ marginBottom: '22px' }}>
                  Nivel A2: 10° curso escolar como tercera lengua
                </li>{' '}
                <strong className="txt-highlight">
                  Tercer y cuarto año de aprendizaje de español como lengua
                  extranjera:
                </strong>
                <li style={{ marginBottom: '22px' }}>
                  Nivel B1: 9°/10° curso escolar como segunda lengua
                </li>
                <strong className="txt-highlight">
                  Español como lengua materna o de herencia:  
                </strong>
                <li>
                  Nivel B2: Alumnado con el español como lengua de origen entre
                  10 y 16 años.
                </li>
              </ul>
            </>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_4_bis}</p>
            <p className="txt-left">
              {DIC.CONCURSO_BASES_PARAGRAPH_4_bis_bis} La edad máxima para
              participar será de{' '}
              <strong className="txt-highlight">&nbsp;16 años.</strong>.
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_5}</p>
            <p className="txt-left">
              <strong className="txt-highlight">
                Sólo para la categoría A1:{' '}
              </strong>{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_5bis}
            </p>
            <p className="txt-left">
              <strong className="txt-highlight">
                Cada colegio participante contará con candidatos y candidatas
                suplentes por si el día de la semifinal o de la final los
                elegidos no pudieran asistir.
              </strong>{' '}
            </p>
          </li>
          {/* 4.PÁGINA WEB */}
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
          {/* 5.TEXTOS DE LECTURA */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Textos de lectura:&nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_6}{' '}
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_7}</p>
            <p className="txt-left">
              {' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_7_bis}{' '}
              </strong>
            </p>
            {/* <p className="txt-left">
              {' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_8}{' '}
              </strong>
            </p> */}
            <p className="txt-left">
              IMPORTANTE:{' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_9}
              </strong>
            </p>
          </li>
          {/* 6 .PROCESO DE SELECCION DE CANDIDATOS Y CRITERIOS DE LECTURA */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Proceso de selección de candidatos y criterios de lectura:
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_13}
            </p>

            <p className="txt-left">
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_13_bis}
              </strong>
            </p>
            <ul className="no-bullets">
              <li>- Pronunciación y entonación</li>
              <li>- Comprensión e interpretación</li>
            </ul>
            <p className="txt-left">
              {DIC.CONCURSO_BASES_PARAGRAPH_13_bis_bis}
            </p>
            <ul className="no-bullets">
              <li>
                -{' '}
                <strong className="txt-highlight">
                  <em>Pronunciación / entonación:</em>{' '}
                </strong>{' '}
                &nbsp;{DIC.CONCURSO_BASES_PARAGRAPH_14}
              </li>
              <li>
                -{' '}
                <strong className="txt-highlight">
                  <em> Comprensión / interpretación:</em>{' '}
                </strong>{' '}
                {DIC.CONCURSO_BASES_PARAGRAPH_15}
              </li>
            </ul>
          </li>
          {/* 7. SEMIFINALES */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Semifinales:&nbsp;</strong>
              Las semifinales se habrán celebrado antes del{' '}
              <strong className="txt-highlight">
                {` ${DIC.CONCURSO_EDICION_SF_MUST_BE_DONE_BY}. `}
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_16}
            </p>
            <p className="txt txt-inline">
              Este proceso dependerá del número de centros que se inscriban al
              concurso <strong>{DIC.CONCURSO_BASES_PARAGRAPH_16_bis}</strong>.{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_16_bis_bis}
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_17}</p>
            <p className="txt-left">
              <strong>{DIC.CONCURSO_BASES_PARAGRAPH_18}</strong>{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_18_bis}
            </p>
          </li>
          {/* 8. ALTERNATIVA VIRTUAL */}
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Alternativa virtual:&nbsp;
              </strong>
              Desde la pandemia Covid-19 se ofrece una{' '}
              <strong className="txt-highlight">
                una alternativa digital para la realización de las semifinales
                regionales:
              </strong>
              &nbsp; La final del{' '}
              <strong className="txt-highlight">
                {DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}
              </strong>{' '}
              se celebrará de forma presencial en el salón de actos del
              Instituto Cervantes de Fráncfort.
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_23_bis}</p>
          </li>
          {/* 9. SEMIFINAL LATINOAMÉRICA */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Semifinal Latinoamérica: &nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_19}
              <strong className="txt-highlight">
                {' '}
                La Semifinal Latinoamérica
              </strong>
              &nbsp;se celebrará el
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}`}{' '}
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_20}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}
              </strong>
              . La inscripción tendrá lugar a través de la página{' '}
              <a href="https://www.leo-leo-hessen.com">{DIC.CONCURSO_WEB}</a>.
            </p>
            <p className="txt-left">
              <strong className="txt-highlight">Semifinal ALCE:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_20bis}{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}.
              </strong>
            </p>
          </li>
          {/* 10. PROTECCIÓN DE DATOS */}
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Protección de datos:&nbsp;
              </strong>
              Los centros inscritos{' '}
              <strong className="txt-highlight">
                se asegurarán de poseer la autorización{' '}
              </strong>
              de los padres del alumnado, que participen en alguna de las fases
              del concurso, para la posible publicación de sus fotos en prensa,
              página web del concurso Leo, leo o de los colegios participantes o
              en RRSS.
              <strong className="txt-highlight">
                {' '}
                En caso de que algún alumno o alumna no quiera ser fotografiado
                durante las semifinales o la final, deberá informar a los
                coordinadores antes de que comience el evento. En las
                fotografías grupales, el alumno o la alumna deberá abstenerse de
                integrarse al grupo en el momento de tomarse las fotografías.
              </strong>
            </p>
            <p className="txt-left">{DIC.CONCURSO_BASES_PARAGRAPH_24}</p>
          </li>
          {/* 11.JURADO */}

          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Jurado:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_10}
              <strong className="txt-highlight">
                &nbsp;los miembros del jurado de la final deberán ser personas
                ajenas o externas a los colegios participantes.
              </strong>
              &nbsp;{DIC.CONCURSO_BASES_PARAGRAPH_10_bis}
            </p>
            <p className="txt txt-left">
              {DIC.CONCURSO_BASES_PARAGRAPH_10_bisBis}
            </p>
          </li>
          {/* 12. PUBLICO */}
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Público:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_11}
            </p>
          </li>
          {/* 13. PREMIOS */}
          <li className="app-olist-item">
            <strong className="txt-highlight">Premios:&nbsp;</strong>
            <p className="txt txt-inline">{DIC.CONCURSO_BASES_PARAGRAPH_12}</p>
          </li>

          {/* 14. FINAL NACIONAL */}
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Final Nacional:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_25} &nbsp;
              <strong className="txt-highlight">
                {DIC.CONCURSO_EDICION_ENVIO_AUDIOS}
              </strong>{' '}
              &nbsp;
              {DIC.CONCURSO_BASES_PARAGRAPH_25_bis}
            </p>
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
