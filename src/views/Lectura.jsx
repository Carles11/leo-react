import React from "react"
import Helmet from "react-helmet"

import withScroll from "../components/HOC/withScroll"

import A1 from "../assets/docs/2018/A1/A1-la_bruja_maruja_pablin_y_pablon.docx"
import A1_1 from "../assets/docs/2018/A1/A1-eres_un_desastre.doc"
import A2 from "../assets/docs/2018/A2/A2-buena_onda_desde_cusco.docx"
import B1 from "../assets/docs/2018/B1/B1-los_alfajores_de_helena_pinto.docx"
import B1_1 from "../assets/docs/2018/B1/B1-la_compra_de_ropa.docx"
import B1_2 from "../assets/docs/2018/B1/B1-en_directo_desde_la_ciudad_de_los_contrastes.docx"
import B1_3 from "../assets/docs/2018/B1/B1-una_noticia_del_periodico.docx"
import B1_4 from "../assets/docs/2018/B1/B1-la_tienda_de_la_verdad.docx"
import B2 from "../assets/docs/2018/B2/B2-un_chango_de_malasia.docx"
import B2_1 from "../assets/docs/2018/B2/B2-la_culpa_es_de_los_tlaxcaltecas.docx"
import B2_2 from "../assets/docs/2018/B2/B2-el_llano_en_llamas.docx"
import B2_3 from "../assets/docs/2018/B2/B2-pedro_paramo.docx"
import B2_4 from "../assets/docs/2018/B2/B2-santa.docx"
import A1_2019 from "../assets/docs/2019/A1/A1-vamos_a_la_playa.docx"
import A1_1_2019 from "../assets/docs/2019/A1/A1-la_chica_nueva.docx"
import A1_2_2019 from "../assets/docs/2019/A1/A1-que_hacemos_el_fin_de_semana.docx"
import A2_2019 from "../assets/docs/2019/A2/A2-quienes_han_sido.docx"
import A2_1_2019 from "../assets/docs/2019/A2/A2-mexico_es_otro_mundo.docx"
import A2_2_2019 from "../assets/docs/2019/A2/A2-la_nueva_familia.docx"
import A2_3_2019 from "../assets/docs/2019/A2/A2-mira_el_cielo_y_no_el_suelo.docx"
import B1_2019 from "../assets/docs/2019/B1/B1-la_vuelta.docx"
import B1_1_2019 from "../assets/docs/2019/B1/B1-los_jovenes_y_europa.docx"
import B1_2_2019 from "../assets/docs/2019/B1/B1-lo_mas_importante.docx"
import B1_3_2019 from "../assets/docs/2019/B1/B1-donde_esta_san_valentin.docx"

const Lectura = props => {
  const { DIC } = props

  return (
    <section className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_TEXTOS}
        meta={[
          { name: "description", content: `${DIC.NAV_TEXTOS}` },
          { property: "og:title", content: `${DIC.NAV_TEXTOS}` }
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_TEXTOS}</h1>
      </header>
      <div className="app-section-width app-section-boxes">
        <h2 className="subtit-section subtit-section-underline txt-center w100">
          {DIC.DOWNLOAD_TEXT_2019}
        </h2>
        <article className="app-section-box mb2rem">
          <h2 className="txt-highlight">
            Textos de lectura de la categoría A1
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Vamos a la playa</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Vamos a la playa'"
                    download="A1-vamos_a_la_playa.docx"
                    href={A1_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Vamos a la playa'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Vamos a la playa'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>La chica nueva</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La chica nueva'"
                    download="A1-la_chica_nueva.docx"
                    href={A1_1_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La chica nueva'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La chica nueva'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Qué hacemos el fin de semana</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Qué hacemos el fin de semana'"
                    download="A1-que_hacemos_el_fin_de_semana.docx"
                    href={A1_2_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Qué hacemos el fin de semana'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Qué hacemos el fin de semana'
                    </span>
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
                <h2>¿Quiénes han sido?</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto '¿Quiénes han sido?'"
                    download="A2-quienes_han_sido.docx"
                    href={A2_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto '¿Quiénes han sido?'"
                  >
                    <span className="hidden">
                      Descargar el texto '¿Quiénes han sido?'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>México es otro mundo</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'México es otro mundo'"
                    download="A2-mexico_es_otro_mundo.docx"
                    href={A2_1_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'México es otro mundo'"
                  >
                    <span className="hidden">
                      Descargar el texto 'México es otro mundo'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>La nueva familia</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La nueva familia'"
                    download="A2-la_nueva_familia.docx"
                    href={A2_2_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La nueva familia'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La nueva familia'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Mira al cielo y no al suelo</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Mira al cielo y no al suelo'"
                    download="A2-mira_al_cielo_y_no_al_suelo.docx"
                    href={A2_3_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Mira al cielo y no al suelo'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Mira al cielo y no al suelo'
                    </span>
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
                <h2>La vuelta</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La vuelta'"
                    download="B1-la_vuelta.docx"
                    href={B1_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La vuelta'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La vuelta'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Los jovenes y europa</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Los jovenes y europa'"
                    download="B1-los_jovenes_y_europa.docx"
                    href={B1_1_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Los jovenes y europa'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Los jovenes y europa'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Lo más importante</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Lo más importante'"
                    download="B1-lo_mas_importante.docx"
                    href={B1_2_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Lo más importante'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Lo más importante'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>¿Dónde está San Valentin?</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto '¿Dónde está San Valentin?'"
                    download="B1-donde_esta_san_valentin.docx"
                    href={B1_3_2019}
                    className="app-list-btn icon-down"
                    title="Descargar el texto '¿Dónde está San Valentin?'"
                  >
                    <span className="hidden">
                      Descargar el texto '¿Dónde está San Valentin?'
                    </span>
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
          <p className="txt-message">{DIC.MSG_SOON}</p>
        </article>
        <h2 className="subtit-section subtit-section-underline txt-center w100 mt3rem">
          {DIC.DOWNLOAD_TEXT}
        </h2>
        <article className="app-section-box">
          <h2 className="txt-highlight">
            Textos de lectura de la categoría A1
          </h2>
          <ul className="app-list">
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>La bruja Maruja, Pablín y Pablon</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La bruja Maruja, Pablín y Pablon'"
                    download="A1-la_bruja_maruja_pablin_y_pablon.docx"
                    href={A1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La bruja Maruja, Pablín y Pablon'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La bruja Maruja, Pablín y Pablon'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Eres un desastre</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Eres un desastre'"
                    download="A1-eres_un_desastre.doc"
                    href={A1_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Eres un desastre'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Eres un desastre'
                    </span>
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
                <h2>Buena onda desde Cusco</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Buena onda desde Cusco'"
                    download="A2-buena_onda_desde_cusco.docx"
                    href={A2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Buena onda desde Cusco'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Buena onda desde Cusco'
                    </span>
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
                <h2>Texto 1: Los alfajores de Helena Pinto</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Los alfajores de Helena Pinto'"
                    download="B1-los_alfajores_de_helena_pinto.docx"
                    href={B1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Los alfajores de Helena Pinto'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Los alfajores de Helena Pinto'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 2: La compra de ropa</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La compra de ropa'"
                    download="B1-la_compra_de_ropa.docx"
                    href={B1_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La compra de ropa'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La compra de ropa'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 3: En directo desde la ciudad de los contrastes</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'En directo desde la ciudad de los contrastes'"
                    download="B1-en_directo_desde_la_ciudad_de_los_contrastes.docx"
                    href={B1_2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'En directo desde la ciudad de los contrastes'"
                  >
                    <span className="hidden">
                      Descargar el texto 'En directo desde la ciudad de los
                      contrastes'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 4: Una noticia del periódico</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Una noticia del periódico'"
                    download="B1-una_noticia_del_periodico.docx"
                    href={B1_3}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Una noticia del periódico'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Una noticia del periódico'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 5: La tienda de la verdad</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La tienda de la verdad'"
                    download="B1-la_tienda_de_la_verdad.docx"
                    href={B1_4}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La tienda de la verdad'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La tienda de la verdad'
                    </span>
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
                <h2>Texto 1: Un chango de Malasia</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Un chango de Malasia'"
                    download="B2-un_chango_en_malasia.docx"
                    href={B2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Un chango de Malasia'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Un chango de Malasia'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 2: La culpa es de los tlaxcaltecas</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'La culpa es de los tlaxcaltecas'"
                    download="B2-la_culpa_es_de_los_tlaxcaltecas.docx"
                    href={B2_1}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'La culpa es de los tlaxcaltecas'"
                  >
                    <span className="hidden">
                      Descargar el texto 'La culpa es de los tlaxcaltecas'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 3: El llano en llamas</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'El llano en llamas'"
                    download="B2-el_llano_en_llamas.docx"
                    href={B2_2}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'El llano en llamas'"
                  >
                    <span className="hidden">
                      Descargar el texto 'El llano en llamas'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 4: Pedro Páramo</h2>
                <div className="app-list-content-btn">
                  <a
                    aria-label="Descargar el texto 'Pedro Páramo'"
                    download="B2-pedro_paramo.docx"
                    href={B2_3}
                    className="app-list-btn icon-down"
                    title="Descargar el texto 'Pedro Páramo'"
                  >
                    <span className="hidden">
                      Descargar el texto 'Pedro Páramo'
                    </span>
                  </a>
                </div>
              </header>
            </li>
            <li className="app-list-item">
              <header className="app-list-header">
                <h2>Texto 5: Santa</h2>
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
