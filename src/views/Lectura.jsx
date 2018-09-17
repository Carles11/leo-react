import React from 'react'
import Helmet from 'react-helmet'

import withScroll from '../components/HOC/withScroll'

import A1 from '../assets/docs/A1/A1.docx'

const Lectura = (props) => {
  const { DIC } = props

  return (
    <div className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_TEXTOS}
        meta={[
				  { name: 'description', content: `${DIC.NAV_TEXTOS}` },
				  { property: 'og:title', content: `${DIC.NAV_TEXTOS}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">
          {DIC.NAV_TEXTOS}
        </h1>
      </header>
      <article className="app-section-width">
        <h2 className="txt-highlight">
Textos de lectura de la categoría A1
        </h2>
        <ul>
          <li>
						La bruja Maruja, Pablín y Pablon&nbsp;&nbsp;
            <a download="A1.docx" href={A1} className="btn btn-invert">
							Descargar

            </a>
          </li>
        </ul>
      </article>
    </div>
  )
}

const LecturaWithScroll = withScroll(Lectura)

export default LecturaWithScroll
