import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
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
          preeliminatorias y la final regional, que tendrá lugar el día{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}</strong>{' '}
          en la sede de Fráncfort del Instituto Cervantes. La fecha límite para
          la inscripción de los colegios participantes será el{' '}
          <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}</strong>
          . Para confirmar que el colegio ha quedado correctamente inscrito, hay
          que mirar en la lista de{' '}
          <Link to="/colegios-inscritos">Colegios inscritos</Link>. Con este fin
          no se mandan correos de confirmación.
        </p>

        <p>
          Desde la convocatoria de 2015 el concurso ‟Leo, leo… ¿Qué lees?” está
          incluido en la red de concursos oficiales del Kultusministerium de
          Hesse. En su duodécimo año de celebración consecutiva cuenta con el
          apoyo institucional de la Consejería de Educación de la Embajada de
          España en Alemania, del Instituto Cervantes de Fráncfort, del
          Consulado General de España en Fráncfort, del Consulado General de
          México en Fráncfort, del Consulado General de Colombia en Fráncfort,
          del Consulado General de Chile en Fráncfort, del Consulado General de
          Perú en Offenbach, del Consulado General de Argentina en Fráncfort y
          de la Asociación Alemana de Profesores de Español (DSV). Asímismo con
          el patrocinio de las editoriales Grupo SM, Schulverlag Klett,
          Cornelsen Verlag y Edinumen.
        </p>
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
              la selección interna de sus candidatos para la semifinal, éstos
              serán un mínimo de uno y un máximo de cuatro, según el número de
              categorías en las que se participe. El proceso de selección queda
              regido y organizado por cada uno de los centros que concurran.
            </p>

            <p className="txt">
              Cada colegio participante contará con candidatos de repuesto por
              si el día de la final los elegidos no pudieran asistir.
            </p>
          </li>
          <li className="app-olist-item">
            <strong className="txt-highlight">
              Niveles de participación:&nbsp;
            </strong>
            <p className="txt txt-inline">
              Se establecen cuatro niveles de participación, definidos según el
              Marco Europeo de Referencia para las Lenguas:
              <strong className="txt-highlight">
                &nbsp;A1, A2, B1 y B2.&nbsp;
              </strong>
              La categoría B2 queda reservada para alumnos con español como
              lengua materna y para todos aquellos que hablen español como si lo
              fueran, por ejemplo, por haber vivido una larga temporada en un
              país de lengua española. El jurado se reserva el derecho de
              descalificar a los alumnos que no hayan sido inscritos en la
              categoría apropiada. La elección de la categoría en la que
              participan los alumnos queda al criterio del profesor que los
              presente al concurso. Como pauta orientativa se establece un nivel
              A1 para alumnos en primer año de aprendizaje; A2 segundo o en
              algunas ocasiones tercero y B1 cuarto o en algunas ocasiones
              quinto; dependiendo de si los alumnos estudian el español como
              segunda o tercera lengua extranjera. Otro criterio importante a la
              hora de establecer el nivel en el que participen los candidatos
              será el nivel (MCER) del libro de texto que se esté utilizando en
              clase en la segunda mitad del curso escolar.
            </p>
            <br />
            <p className="txt">
              La edad de los participantes será tenida en cuenta por el jurado a
              la hora de puntuar, ya que por el desarrollo intrínseco del alumno
              la competencia lectora -tanto en la lengua materna como en la
              extranjera- mejora con la edad. La edad máxima para participar
              será de <strong className="txt-highlight">&nbsp;16 años.</strong>.
            </p>
            <p className="txt">
              Los alumnos que hayan concursado ya en una categoría no podrán
              repetir en el futuro en la misma categoría, sí en la siguiente.
              Los alumnos que participen en el nivel B2 podrán volver a
              concursar, siempre y cuando no hayan recibido hasta el momento
              ningún primer premio.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Textos:&nbsp;</strong>
              Para la fecha de la semifinal cada alumno participante habrá
              preparado los textos preestablecidos. Tres, cuatro o cinco textos
              -procedentes de libros de texto de español como lengua extranjera
              o de literatura juvenil (según la categoría) y correspondientes al
              nivel para el que participe- y leerá el que se elija al azar en el
              momento previo a la lectura.
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                TEXTOS A LEER EN LA FINAL:&nbsp;
              </strong>
              Buscando la homogeneidad de los textos, en cuanto a su grado de
              dificultad y extensión, y para facilitar la evaluación de los
              candidatos por parte del jurado, ésta será la selección de textos
              a leer:
              <strong className="txt-highlight">
                En la categoría A1 habrá 3 texto, en A2 y B1 4 y en B2 5 textos,
                fijados por la organización del concurso, los alumnos prepararán
                todos los textos de su categoría y leerán uno de ellos, elegido
                al azar el día del concurso. Los textos A1 constarán de 1300
                caracteres y los de A2, B1 y B2 de 1500.
              </strong>
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                Los textos para la categoría B2 son fragmentos -adaptados- de
                literatura juvenil latinoamericana (resultado de la cooperación
                con los consulados de México, Colombia, Chile, Perú y
                Argentina).
              </strong>
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Jurado:&nbsp;</strong>
              Con el fin de garantizar la ecuanimidad en la decisión del jurado,
              se estableció a partir de la convocatoria de 2017 que todos los
              miembros del jurado de la final fueran personas ajenas a los
              colegios participantes. Igualmente es de desear que siempre que
              sea posible los jurados de las semifinales también estén formados
              por personas externas (por lo menos 2 de los miembros del jurado).
              Todos los miembros del jurado hablarán español como lengua
              materna.
            </p>
            <p className="txt">
              Los miembros del jurado tendrán que entregar la puntuación de cada
              candidato antes de la suma de los puntos.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Público:&nbsp;</strong>
              En caso de que otros alumnos (o padres) del colegio quieran formar
              parte del público asistente a la final, deberá ser precisado su
              número de antemano y avalado su "buen comportamiento“ mediante la
              asistencia de otro profesor acompañante.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Premios:&nbsp;</strong>
              Los
              <strong className="txt-highlight">&nbsp;premios&nbsp;</strong>
              para los ganadores y finalistas serán lotes de libros de las
              editoriales Grupo SM, Schulverlag Klett, Cornelsen Verlag y
              Edinumen, licencias del juego digital para aprender español
              Guadalingo de la editorial Edinumen, vales de libros de la
              Asociación Alemana de Profesores de Español y matrículas DELE del
              Instituto Cervantes de Fráncfort. También recibirán un certificado
              por su participación, para los alumnos que consigan los primeros
              puestos en las cuatro categorías, los certificados estarán
              firmados por el Ministro de Cultura de Hesse.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Proceso de selección de candidatos:
              </strong>
            </p>
            <p className="txt">
              Como se ha dicho anteriormente el proceso interno de selección de
              los candidatos queda ligado al criterio de cada centro, el nivel
              de los semifinalistas y finalistas se ajustará a la categoría para
              la que se les ha inscrito.
            </p>
            <p className="txt">
              La "calidad" de la lectura se determinará según los siguientes dos
              criterios:
            </p>
            <ul>
              <li>- Pronunciación / entonación</li>
              <li>- Comprensión / interpretación</li>
            </ul>
            <p className="txt">
              La puntuación será de 1 a 5, para cada una de las tres categorías,
              siendo 5 el máximo.
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                Pronunciación/entonación:&nbsp;
              </strong>
              el candidato consigue una pronunciación clara y correcta (en los
              niveles A1 y A2 no se tendrán en cuenta deficiencias en la
              pronunciación de la "r/rr"), acentuación correcta y velocidad de
              lectura. No se penalizará la autocorrección.
            </p>
            <p className="txt">
              <strong className="txt-highlight">
                Comprensión/interpretación:&nbsp;
              </strong>
              el candidato demuestra la comprensión de lo leído a través de la
              segmentación correcta de frases y el uso de recursos prosódicos.
              Asimismo, consigue reflejar el tono y el contexto ambiental de la
              lectura.
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Las semifinales&nbsp;</strong>
              se habrán celebrado antes del{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE}`}
              </strong>
              . Los coordinadores de las semifinales acordarán la fecha concreta
              en la que tendrá lugar esta prueba eliminatoria con los centros
              participantes en cada una de ellas. Este proceso dependerá del
              número de centros que se inscriban al concurso (fecha máxima de
              inscripción{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}
              </strong>
              ). Se intentará que el número de SF no sea mayor a 6, para evitar
              que la final se prolongue demasiado.
            </p>
            <p className="txt">
              En cada una de las semifinales se elegirá sólo a un/a alumno/a
              para ocupar el primer y segundo puesto, ya que sólo una persona
              puede representar la semifinal en la final del Instituto Cervantes
              (el segundo puesto queda como sustituto/a y también asiste a la
              final). Esta regla se hace extensiva a las 4 categorías de lectura
              (A1 – B2).
            </p>
            <p className="txt">
              Todos los centros escolares que se inscriban al concurso estarán
              dispuestos a celebrar y organizar en su colegio una de las
              semifinales. En caso contrario se avisará a la organización antes
              de terminar el plazo de inscripción. Organizar una semifinal sólo
              requiere tener una sala grande en el colegio, contactar e invitar
              a los miembros del jurado con la ayuda del resto de los centros de
              la semifinal y recoger los premios en el IC. Un representante de
              cada semifinal recogerá los premios para su eliminatoria en el
              Instituto Cervantes de Fráncfort en la fecha indicada por la
              organización (normalmente en febrero de cada año).
            </p>
          </li>
          <li className="app-olist-item">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Semifinal Latinoamérica: &nbsp;
              </strong>
              Fruto de la colaboración con los Consulados Generales de México,
              Colombia, Chile, Perú y Argentina se celebrará una semifinal B2
              para alumnos procedentes de países latinoamericanos. Para ello no
              será necesario ser poseedor de la nacionalidad del país. La SF se
              celebrará el{' '}
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_LAST_DATE}`}{' '}
              </strong>
              en el Instituto Cervantes de Fráncfort con el apoyo y tutela de
              los consulados latinoamericanos antes mencionados. El plazo de
              inscripción para esta semifinal terminará el{' '}
              <strong className="txt-highlight">{`${DIC.CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE}`}</strong>
              . La inscripción tendrá lugar a través de la página&nbsp;
              <Link to="/">
                <strong className="txt-highlight">
                  www.leo-leo-hessen.com
                </strong>
              </Link>
              .
            </p>
            <p className="txt">
              <strong className="txt-highlight">Semifinal ALCE:&nbsp;</strong>
              Los alumnos con español como lengua materna procedentes de las
              Aulas de Lengua y Cultura Española (ALCE) -organizadas por el
              Ministerio de Educación de España-, podrán participar en la
              Semifinal ALCE, la fecha se dará a conocer en las aulas de dicho
              programa de enseñanza. Participarán sólo en la categoría B2 y
              presentarán a dos candidatos para la final en el Instituto
              Cervantes el
              <strong className="txt-highlight">
                {' '}
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}
              </strong>
              .
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Página web:&nbsp;</strong>A
              partir de la convocatoria 2019 el concurso cuenta con una página
              web{' '}
              <Link to="/">
                <strong className="txt-highlight">
                  www.leo-leo-hessen.com
                </strong>
              </Link>{' '}
              donde los colegios interesados se podrán informar de los detalles
              del concurso. En la página se encuentran audios para practicar los
              textos de lectura. Asimismo se pueden encontrar aquí diferentes
              impresos útiles a lo largo del concurso.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">Inscripción:&nbsp;</strong>
              Tendrá lugar hasta el{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}`}
              </strong>{' '}
              y se realizará exclusivamente a través de la página web. Para la
              Semifinal Latinoamérica también se utilizará este medio.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Alternativa virtual:&nbsp;
              </strong>
              Debido a la{' '}
              <strong className="txt-highlight">pandemia de Covid-19</strong> se
              ofrecerá para la convocatoria {nextYearEdition} una{' '}
              <strong className="txt-highlight">
                alternativa digital para la realización de las semifinales
                regionales, la final del{' '}
              </strong>{' '}
              <strong className="txt-highlight">
                {`${DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}`}
              </strong>{' '}
              se realizará -siempre y cuando la situación pandémica lo permita-
              de forma presencial en el salón de actos del Instituto Cervantes
              de Fráncfort.
            </p>
            <p>
              En caso de que los alumnos no puedan encontrarse para una lectura
              presencial de los textos, y para evitar problemas técnicos o
              posibles irregularidades durante la lectura, los candidatos
              lectores se conectarán a las videoconferencias&nbsp;
              <strong className="txt-highlight">
                desde su centro escolar en compañía de su profesor/a de español
              </strong>
              , quien avalará el cumplimiento de las normas establecidas.
            </p>
            <p>
              En cada SF virtual se conectarán: los candidatos en presencia de
              su profesor/a, los miembros del jurado (todos juntos desde un
              centro o por separado, según se acuerde con el centro organizador
              de la SF) y un representante del centro organizador que actuará de
              moderador/a.
            </p>
          </li>
          <li className="app-olist-item double">
            <p className="txt txt-inline">
              <strong className="txt-highlight">
                Protección de datos:&nbsp;
              </strong>
              Los centros inscritos se asegurarán de poseer la autorización de
              los padres de los alumnos que participen para la posible
              publicación de sus nombres y/o fotos en la página web del concurso
              una vez terminada la final.
            </p>
            <p>
              Asimismo, los padres autorizan con este documento que sus hijos/as
              puedan participar en las SF/F en versión digital a través de
              videoconferencia, en caso de que fuera necesario.
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
