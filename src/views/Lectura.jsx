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
    <section className="app-content pb2rem mb2rem">
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
      <div className="app-section-width app-section-boxes">
        <article className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría A1
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
La bruja Maruja, Pablín y Pablon
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La bruja Maruja, Pablín y Pablon'"
                    download="A1-la_bruja_maruja_pablin_y_pablon.docx"
                    href={A1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La bruja Maruja, Pablín y Pablon'"
                  >
                    <span className="hidden">Descargar el texto 'La bruja Maruja, Pablín y Pablon'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Eres un desastre
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Eres un desastre'"
                    download="A1-eres_un_desastre.doc"
                    href={A1_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Eres un desastre'"
                  >
                    <span className="hidden">Descargar el texto 'Eres un desastre'</span>
                  </a>
                </div>
              </header>
            </li>
          </ul>
        </article>
        <article className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría A2
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Buena onda desde Cusco
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Buena onda desde Cusco'"
                    download="A2-buena_onda_desde_cusco.docx"
                    href={A2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Buena onda desde Cusco'"
                  >
                    <span className="hidden">Descargar el texto 'Buena onda desde Cusco'</span>
                  </a>
                </div>
              </header>
            </li>
          </ul>
        </article>
        <article className="app-section-box">
          <h2 className="txt-highlight">
Textos de lectura de la categoría B1
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 1: Los alfajores de Helena Pinto
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Los alfajores de Helena Pinto'"
                    download="B1-los_alfajores_de_helena_pinto.docx"
                    href={B1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Los alfajores de Helena Pinto'"
                  >
                    <span className="hidden">Descargar el texto 'Los alfajores de Helena Pinto'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 2: La compra de ropa
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La compra de ropa'"
                    download="B1-la_compra_de_ropa.docx"
                    href={B1_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La compra de ropa'"
                  >
                    <span className="hidden">Descargar el texto 'La compra de ropa'</span>                  
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 3: En directo desde la ciudad de los contrastes
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'En directo desde la ciudad de los contrastes'"
                    download="B1-en_directo_desde_la_ciudad_de_los_contrastes.docx"
                    href={B1_2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'En directo desde la ciudad de los contrastes'"
                  >
                    <span className="hidden">Descargar el texto 'En directo desde la ciudad de los contrastes'</span>                  
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 4: Una noticia del periódico
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Una noticia del periódico'"
                    download="B1-una_noticia_del_periodico.docx"
                    href={B1_3}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Una noticia del periódico'"
                  >
                    <span className="hidden">Descargar el texto 'Una noticia del periódico'</span>                  
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 5: La tienda de la verdad
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La tienda de la verdad'"
                    download="B1-la_tienda_de_la_verdad.docx"
                    href={B1_4}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La tienda de la verdad'"
                  >
                    <span className="hidden">Descargar el texto 'La tienda de la verdad'</span>                  
                  </a>
                </div>
              </header>
            </li>
          </ul>
        </article>
        <article className="app-section-box">
          <h2 className="txt-highlight">
          Textos de lectura de la categoría B2
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 1: Un chango de Malasia
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Un chango de Malasia'"
                    download="B2-un_chango_en_malasia.docx"
                    href={B2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Un chango de Malasia'"
                  >
                    <span className="hidden">Descargar el texto 'Un chango de Malasia'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 2: La culpa es de los tlaxcaltecas
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La culpa es de los tlaxcaltecas'"
                    download="B2-la_culpa_es_de_los_tlaxcaltecas.docx"
                    href={B2_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La culpa es de los tlaxcaltecas'"
                  >
                    <span className="hidden">Descargar el texto 'La culpa es de los tlaxcaltecas'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 3: El llano en llamas
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'El llano en llamas'"
                    download="B2-el_llano_en_llamas.docx"
                    href={B2_2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'El llano en llamas'"
                  >
                    <span className="hidden">Descargar el texto 'El llano en llamas'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 4: Pedro Páramo
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Pedro Páramo'"
                    download="B2-pedro_paramo.docx"
                    href={B2_3}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Pedro Páramo'"
                  >
                    <span className="hidden">Descargar el texto 'Pedro Páramo'</span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>
Texto 5: Santa
                </h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Santa'"
                    download="B2-santa.docx"
                    href={B2_4}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Santa'"
                  >
                    <span className="hidden">Descargar el texto 'Santa'</span>
                  </a>
                </div>
              </header>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

const LecturaWithScroll = withScroll(Lectura)

export const Unwrapped = Lectura
export default LecturaWithScroll
