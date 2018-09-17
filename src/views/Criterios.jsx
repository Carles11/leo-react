import React from 'react'
import Helmet from 'react-helmet'

const Criterios = (props) => {
  const { DIC } = props

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
        <h1 className="tit-header mb2rem">
          {DIC.NAV_CRITERIOS}
        </h1>
      </header>
      <article className="app-section-width">
        <p className="txt">
          <strong className="txt-highlight">
Criterios de lectura para el jurado:&nbsp;
          </strong>
					La "calidad" de la lectura se determinará según los siguientes dos criterios:
          <ul>
            <li>
Pronunciación / entonación
            </li>
            <li>
Comprensión / interpretación
            </li>
          </ul>
					La puntuación será de 1 a 5, para cada una de las tres categorías, siendo 5 el máximo.

        </p>
        <p className="txt">
          <strong className="txt-highlight">
Pronunciación/entonación:&nbsp;
          </strong>
					pronunciación clara y correcta (en los niveles A1 y A2 no se tendrán en cuenta
					deficiencias en la pronunciación de la "r/rr"), acentuación correcta y velocidad de
					lectura. No se penalizará la autocorrección.

        </p>
        <p className="txt">
          <strong className="txt-highlight">
Comprensión/interpretación:&nbsp;
          </strong>
					el candidato demuestra la comprensión de lo leído a través de la segmentación correcta de
					frases y el uso de recursos prosódicos. Así mismo consigue reflejar el tono y el contexto
					ambiental de la lectura.

        </p>
      </article>
    </div>
  )
}

export default Criterios
