import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import withScroll from '../components/HOC/withScroll';

const Bases = (props) => {
  const { DIC } = props;
  const currentYear = new Date();
  const nextYearEdition = currentYear.getFullYear() + 1;
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
        <p>Estimados/as compañeros/as:</p>
        <p>{DIC.CONCURSO_BASES_TITLE}</p>
        <p>
          A continuación encontraréis las bases del concurso, el proceso de
          selección de candidatos e información general sobre las semifinales
          eliminatorias y la final regional, que tendrá lugar el día{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}</strong>{' '}
          en la sede de Fráncfort del Instituto Cervantes. La fecha límite para
          la inscripción de los colegios participantes será el{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}</strong>
          . Para confirmar que el colegio ha quedado correctamente inscrito, hay
          que mirar en la lista de{' '}
          <Link to="/colegios-inscritos">Colegios inscritos</Link>, ya que no se
          mandan correos de confirmación.
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
              la selección interna de sus candidatos para la semifinal.{' '}
              {DIC.CONCURSO_BASES_PARAGRAPH_3}
            </p>
          </li>
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
            <p className="txt">
              La edad de los participantes será tenida en cuenta por el jurado a
              la hora de puntuar, ya que por el desarrollo intrínseco del alumno
              la competencia lectora -tanto en la lengua materna como en la
              extranjera- mejora con la edad. La edad máxima para participar
              será de <strong className="txt-highlight">&nbsp;16 años.</strong>.
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_5}</p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Textos:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_6}
              {''}
              <strong className="txt-highlight">
                Los alumnos prepararán todos los textos de su categoría y leerán
                uno de ellos, elegido al azar el día del concurso.
              </strong>{' '}
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                Características de los textos:&nbsp;
              </strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_7}
            </p>
            <p className="txt">{DIC.CONCURSO_BASES_PARAGRAPH_8}</p>
            <p className="txt">
              <strong className="txt-highlight">
                {DIC.CONCURSO_BASES_PARAGRAPH_9}
              </strong>
            </p>
          </li>
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
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Público:&nbsp;</strong>
              {DIC.CONCURSO_BASES_PARAGRAPH_11}
            </p>
          </li>
          <li className="app-olist-item">
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
              La calidad de la lectura se determinará según los siguientes dos
              criterios:
            </p>
            <ul>
              <li>
                {' '}
                <strong className="txt-highlight">
                  - Pronunciación / entonación{' '}
                </strong>{' '}
                {DIC.CONCURSO_BASES_PARAGRAPH_14}
              </li>
              <li>
                {' '}
                <strong className="txt-highlight">
                  - Comprensión / interpretación{' '}
                </strong>{' '}
                {DIC.CONCURSO_BASES_PARAGRAPH_15}
              </li>
            </ul>
            <p className="txt">
              La puntuación será de 1 a 5, para cada una de las tres categorías,
              siendo 5 el máximo.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Semifinales:&nbsp;</strong>
              Las Semifinales (SF) se habrán celebrado antes del{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}`}
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
              Fruto de la colaboración con los Consulados Generales de México,
              Colombia, Chile, Perú y Argentina se celebrará una semifinal de
              nivel B2 para alumnos procedentes de países latinoamericanos. Para
              ello no será necesario ser poseedor de la nacionalidad del país,
              solamente tener ascendencia de un país latinoamericano. La SF se
              celebrará el{' '}
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_LAST_DATE}`}{' '}
              </strong>
              en el Instituto Cervantes de Fráncfort con el apoyo y la tutela de
              los consulados latinoamericanos antes mencionados. El plazo de
              inscripción para esta semifinal terminará el{' '}
              <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}</strong>
              . Para más información sobre la inscripción, consultar el
              apartado&nbsp;
              <Link to="/semifinal-latinoamericana">
                <strong className="txt-highlight">
                  Semifinal Latinoamérica
                </strong>
              </Link>
              .
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Semifinal ALCE:&nbsp;</strong>
              Los alumnos con español como lengua materna procedentes de las
              Aulas de Lengua y Cultura Española (ALCE), coordinadas por el
              Ministerio de Educación de España, podrán participar en la
              Semifinal ALCE. La fecha se dará a conocer en las aulas de dicho
              programa de enseñanza. Los alumnos participarán solo en la
              categoría B2 y presentarán a dos candidatos para la final en el
              Instituto Cervantes el día
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}
              </strong>
              .
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Inscripción:&nbsp;</strong>
              Tendrá lugar hasta el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}
              </strong>{' '}
              y se realizará exclusivamente a través de la página web. Para
              confirmar que el colegio ha quedado correctamente inscrito, hay
              que mirar en la lista de Colegios inscritos, ya que no se mandan
              correos de confirmación. Para la Semifinal Latinoamérica también
              se utilizará este medio.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Alternativa virtual:&nbsp;
              </strong>
              Si el desarrollo del concurso se viera afectado por la{' '}
              <strong className="txt-highlight">pandemia de Covid-19</strong> se
              ofrecerá para la convocatoria de {nextYearEdition} una alternativa
              digital para la realización de las semifinales regionales. La
              final del{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}
              </strong>{' '}
              se realizará, siempre y cuando la situación pandémica lo permita,
              de forma presencial en el salón de actos del Instituto Cervantes
              de Fráncfort.
            </p>
            <p>
              En caso de celebrarse la SF de manera digital y para evitar
              problemas técnicos o posibles irregularidades durante la
              lectura,&nbsp;
              <strong className="txt-highlight">
                los candidatos lectores se conectarán a las
                videoconferencias desde su centro escolar en compañía de su
                profesor/a de español,
              </strong>
              quien avalará el cumplimiento de las normas establecidas.
            </p>
            <p>
              En cada SF virtual se conectarán, por tanto: los candidatos en
              presencia de su profesor/a, los miembros del jurado (todos juntos
              desde un centro o por separado, según se acuerde con el centro
              organizador de la SF) y un representante del centro organizador
              que actuará de moderador/a.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Protección de datos:&nbsp;
              </strong>
              Los centros inscritos se asegurarán de poseer la autorización de
              los padres de los participantes para la posible publicación de sus
              nombres y/o fotos en la página web del concurso una vez terminada
              la final.
            </p>
            <p>
              Asimismo, los padres autorizan con este documento que sus hijos/as
              puedan participar en la SF y en la F en versión digital a través
              de videoconferencia, en caso de que fuera necesario.
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
