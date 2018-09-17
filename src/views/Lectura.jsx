import React from 'react'
import Helmet from 'react-helmet'

import withScroll from '../components/HOC/withScroll'

import A1 from '../assets/docs/A1/A1-la_bruja_maruja_pablin_y_pablon.docx'
import A1_1 from '../assets/docs/A1/A1-eres_un_desastre.doc'
import A2 from '../assets/docs/A2/A2-buena_onda_desde_cusco.docx'
import B1 from '../assets/docs/B1/B1-los_alfajores_de_helena_pinto.docx'
import B1_1 from '../assets/docs/B1/B1-la_compra_de_ropa.docx'
import B1_2 from '../assets/docs/B1/B1-en_directo_desde_la_ciudad_de_los_contrastes.docx'
import B1_3 from '../assets/docs/B1/B1-una_noticia_del_periodico.docx'
import B1_4 from '../assets/docs/B1/B1-la_tienda_de_la_verdad.docx'
import B2 from '../assets/docs/B2/B2-un_chango_de_malasia.docx'
import B2_1 from '../assets/docs/B2/B2-la_culpa_es_de_los_tlaxcaltecas.docx'
import B2_2 from '../assets/docs/B2/B2-el_llano_en_llamas.docx'
import B2_3 from '../assets/docs/B2/B2-pedro_paramo.docx'
import B2_4 from '../assets/docs/B2/B2-santa.docx'

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
      <article className="app-section app-section-boxes">
        <div className="app-section-box pb2rem">
          <h2 className="txt-highlight">
Textos de lectura de la categoría A1
          </h2>
          <ul>
            <li className="pb2rem">
							La bruja Maruja, Pablín y Pablon&nbsp;&nbsp;
              <a
                download="A1-la_bruja_maruja_pablin_y_pablon.docx"
                href={A1}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Eres un desastre&nbsp;&nbsp;
              <a download="A1-eres_un_desastre.doc" href={A1_1} className="btn btn-invert">
								Descargar

              </a>
            </li>
          </ul>
        </div>
        <div className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría A2
          </h2>
          <ul>
            <li className="pb2rem">
							Buena onda desde Cusco&nbsp;&nbsp;
              <a download="A2-buena_onda_desde_cusco.docx" href={A2} className="btn btn-invert">
								Descargar

              </a>
            </li>
          </ul>
        </div>
        <div className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría B1
          </h2>
          <ul>
            <li className="pb2rem">
							Texto 1:
              <strong className="txt-highlight">
								&nbsp;Los alfajores de Helena Pinto&nbsp;&nbsp;

              </strong>
              <a
                download="B1-los_alfajores_de_helena_pinto.docx"
                href={B1}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 2:
              <strong className="txt-highlight">
&nbsp;La compra de ropa&nbsp;&nbsp;
              </strong>
              <a download="B1-la_compra_de_ropa.docx" href={B1_1} className="btn btn-invert">
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 3:
              <strong className="txt-highlight">
&nbsp;En directo desde la ciudad de los contrastes&nbsp;&nbsp;
              </strong>
              <a download="B1-en_directo_desde_la_ciudad_de_los_contrastes.docx" href={B1_2} className="btn btn-invert">
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 4:
              <strong className="txt-highlight">
&nbsp;Una noticia del periódico&nbsp;&nbsp;
              </strong>
              <a download="B1-una_noticia_del_periodico.docx" href={B1_3} className="btn btn-invert">
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 5:
              <strong className="txt-highlight">
&nbsp;La tienda de la verdad&nbsp;&nbsp;
              </strong>
              <a download="B1-la_tienda_de_la_verdad.docx" href={B1_4} className="btn btn-invert">
								Descargar

              </a>
            </li>
          </ul>
        </div>
        <div className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría B2
          </h2>
          <ul>
            <li className="pb2rem">
							Texto 1:
              <strong className="txt-highlight">
								&nbsp;Un chango de Malasia&nbsp;&nbsp;

              </strong>
              <a
                download="B2-un_chango_en_malasia.docx"
                href={B2}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 2:
              <strong className="txt-highlight">
								&nbsp;La culpa es de los tlaxcaltecas&nbsp;&nbsp;

              </strong>
              <a
                download="B2-la_culpa_es_de_los_tlaxcaltecas.docx"
                href={B2_1}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 3:
              <strong className="txt-highlight">
								&nbsp;El llano en llamas&nbsp;&nbsp;

              </strong>
              <a
                download="B2-el_llano_en_llamas.docx"
                href={B2_2}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 4:
              <strong className="txt-highlight">
								&nbsp;Pedro Páramo&nbsp;&nbsp;

              </strong>
              <a
                download="B2-pedro_paramo.docx"
                href={B2_3}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
            <li className="pb2rem">
							Texto 5:
              <strong className="txt-highlight">
								&nbsp;Santa&nbsp;&nbsp;

              </strong>
              <a
                download="B2-santa.docx"
                href={B2_4}
                className="btn btn-invert"
              >
								Descargar

              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}

const LecturaWithScroll = withScroll(Lectura)

export default LecturaWithScroll
