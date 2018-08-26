import React from 'react'
import Helmet from 'react-helmet'

const Bases = props => {
  const { DIC } = props

  return (
    <section className="app-content">
      <Helmet 
        title={DIC.NAV_BASES} 
        meta={[
          { name:"description", content: `${DIC.NAV_BASES}` },
          { property: "og:title", content: `${DIC.NAV_BASES}` }
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem ">{DIC.NAV_BASES} </h1>
      </header>
      <article>
        <ol className="app-section-width app-list">
          <li className="app-list-item">
            <p className="txt txt-inline">Cada uno de los colegios participantes habrá realizado hasta el 
              <strong className="txt-highlight"> 01 de marzo de 2018 </strong>
              la selección interna de sus candidatos para la semifinal, éstos serán un mínimo de uno y un 
              máximo de cuatro, según el número de categorías en las que se participe. El proceso de selección 
              queda regido y organizado por cada uno de los centros que concurran.
            </p><br />
            <p className="txt">Cada colegio participante contará con candidatos de repuesto por si el día de la final 
              los elegidos no pudieran participar
            </p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline">Se establecen cuatro niveles de participación, definidos según el Marco Europeo 
              de Referencia para las Lenguas: <strong className="txt-highlight"> A1, A2, B1 y B2.</strong> La categoría B2 queda reservada para alumnos con español como lengua materna y para todos aquellos que hablen español como si lo fuera, por ejemplo, por haber vivido una larga 
              temporada en un país de lengua española. El jurado se reserva el derecho de descalificar a los alumnos que no estén 
              en la categoría apropiada. La elección de la categoría en la que participan los alumnos queda al criterio del profesor 
              que los presente al concurso. Como pauta orientativa se establece un nivel A1 para alumnos en primer año de aprendizaje; 
              A2 segundo o tercero y B1 cuarto o quinto; dependiendo de si los alumnos estudian el español como segunda o tercera lengua 
              extranjera. 
            </p><br />
            <p className="txt">La edad de los participantes será tenida en cuenta por el jurado a la hora de puntuar, ya que por el 
              desarrollo intrínseco del alumno la competencia lectora -tanto en la lengua materna como en la extranjera- mejora con la 
              edad. La edad máxima para participar será de <strong className="txt-highlight"> 16 años</strong>.
            </p>
            <p className="txt">Los alumnos que hayan concursado ya en una categoría no podrán repetir en el futuro en la misma categoría, 
              sí en la siguiente.
            </p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline">Para la fecha de la semifinal cada alumno participante habrá preparado los textos preestablecidos. 
              Tres, cuatro o cinco textos -procedentes de libros de texto de español como lengua extranjera o de literatura juvenil 
              (según la categoría) y correspondientes al nivel para el que participe- y leerá el que el jurado elija al azar en el 
              momento de la lectura.
            </p>
            <p className="txt"><strong className="txt-highlight">TEXTOS A LEER EN LA FINAL:</strong> Buscando    la homogeneidad de los textos, en cuanto a su grado de 
              dificultad y extensión, y para facilitar la evaluación de los candidatos por parte del jurado, ésta será la 
              selección de textos a leer: <strong className="txt-highlight">En la categoría A1 habrá 3 textos, en A2 4 y en B1 / B2 5 textos, fijados por la 
              organización del concurso, los alumnos prepararán todos los textos de su categoría y leerán uno de ellos, 
              elegido por el jurado, el día del concurso. Los textos A1 constarán de 1300 caracteres y los de A2, B1 y B2 de 1500.</strong>
            </p>
            <p className="txt"><strong className="txt-highlight">Los textos para la categoría B2 son extractos  -adaptados- de literatura juvenil mejicana (resultado de la cooperación con el Consulado General    de Méjico en Fráncfort).</strong>
            </p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline"><strong className="txt-highlight">Jurado:</strong> Con el fin de garantizar la ecuanimidad en la decisión del jurado, se estableció a partir de la convocatoria de 2017 que todos los miembros del jurado de la final sean personas ajenas a los colegios participantes. Igualmente es de desear que siempre que fuera posible los jurados de las semifinales también estuvieran formados por personas externas (por lo menos 2 de los miembros del jurado).
            </p>
            <p className="txt">Los miembros del jurado tendrán que entregar la puntuación de cada candidato antes de la suma de los puntos.</p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline"><strong className="txt-highlight">Público:</strong> En caso de que otros alumnos (o padres) del colegio quieran formar parte del público asistente a la final, deberá ser precisado su número de antemano y avalado su "buen comportamiento“ mediante la asistencia de otro profesor acompañante. En las semifinales el proceso será similar.
            </p>
            <p className="txt"><strong className="txt-highlight">ALUMNOS EN EL PÚBLICO:</strong> Para una mayor motivación, participación y enriquecimiento de todos los alumnos presentes, los alumnos en el público también participarán activamente en el concurso. Habrá premios para los mejores resultados, uno por colegio asistente.
            </p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline">Los <strong className="txt-highlight"> premios</strong> para los ganadores y finalistas serán lotes de libros de las editoriales Grupo SM, Schulverlag Klett y Cornelsen Verlag. También recibirán un certificado por su participación.</p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline"><strong className="txt-highlight">Proceso de selección de candidatos:</strong></p>
            <p className="txt">Como se ha dicho anteriormente el proceso interno de selección de los candidatos queda ligado al criterio de cada centro, el nivel de los semifinalistas y finalistas se ajustará a la categoría para la que se les ha inscrito.</p>
            <p className="txt">La "calidad" de la lectura se determinará según los siguientes dos criterios:</p>
            <ul>
              <li>Pronunciación / entonación</li>
              <li>Comprensión / interpretación</li>
            </ul>
            <p className="txt">La puntuación será de 1 a 5, para cada una de las tres categorías, siendo 5 el máximo.</p>
            <p className="txt"><strong className="txt-highlight">Pronunciación/entonación:</strong> pronunciación clara y correcta (en los niveles A1 y A2 no se tendrán en cuenta deficiencias en la pronunciación de la "r/rr"), acentuación correcta y velocidad de lectura. No se penalizará la autocorrección.</p>
            <p className="txt"><strong className="txt-highlight">Comprensión/interpretación:</strong> el candidato demuestra la comprensión de lo leído a través de la segmentación correcta de frases y el uso de recursos prosódicos. Asimismo consigue reflejar el tono y el contexto ambiental de la lectura.</p>
          </li>
          <li className="app-list-item">
            <p className="txt txt-inline"><strong className="txt-highlight">Las semifinales </strong> se habrán celebrado antes del <strong className="txt-highlight">20 de abril de 2018</strong>. Los coordinadores de las semifinales acordarán la fecha concreta en la que tendrá lugar esta prueba eliminatoria con los centros participantes en cada una de ellas. Este proceso dependerá del número de centros que se inscriban al concurso (fecha máxima de inscripción 30 de noviembre de 2017). El número de SF no será mayor a 6, para evitar que la final se prolongue demasiado (habría un máximo de 22 candidatos para la final).</p>
          </li>
        </ol>
      </article>
    </section>
  )
}

export default Bases