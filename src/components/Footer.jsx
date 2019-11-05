import React from 'react'
import Button from './Button'

import logoLesbar from '../assets/imgs/logo-lesbar.jpg'
import logoHws from '../assets/imgs/logo-hws.jpg'
import logoHessen from '../assets/imgs/logo-hessen.jpg'
import logoDsg from '../assets/imgs/logo-dsg.jpg'
import logoIc from '../assets/imgs/logo-ic.jpg'
import logoAecid from '../assets/imgs/logo-aecid.jpg'
import logoColombia from '../assets/imgs/logo-colombia.jpg'
import logoChile from '../assets/imgs/logo-chile.jpg'
import logoMexico from '../assets/imgs/logo-mexico.jpg'
import logoSm from '../assets/imgs/logo-sm.jpg'
import logoCornelsen from '../assets/imgs/logo-cornelsen.jpg'
import logoEdinumen from '../assets/imgs/logo-edinumen.jpg'
import logoKlett from '../assets/imgs/logo-klett.jpg'
import logoPeru from '../assets/imgs/logo-peru.jpg'

const Footer = props => {
  const { DIC, FOOTER_DATA } = props

  const copy = `${new Date().getFullYear()}  ${DIC.HEADER_MAIN}`

  return (
    <footer className='app-footer'>
      <div className='app-footer-wrapper w1024'>
        <ul className='app-footer-links'>
          {FOOTER_DATA.map(item => (
            <li key={item.label}>
              <Button
                label={item.label}
                link={item.url}
                external={!!item.external}
              />
            </li>
          ))}
          <li>
            <a
              className='btn-link'
              href="mailto:c.cid@hws.schule?subject=Concurso 'Leo, leo... ¿Qué lees?'"
              aria-label='Correo de contacto'>
              Contacto
              <span className='line'>
                <span />
                <span />
              </span>
            </a>
          </li>
          <li>
            <span>
              &copy;&nbsp;
              {copy}
            </span>
          </li>
        </ul>
        <section className='app-footer-imgs'>
          <h3>{DIC.SPONSOR}</h3>
          <article>
            <a
              href='https://kultusministerium.hessen.de/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web del Ministerio de cultura de Hessen'>
              <img src={logoHessen} alt='Hessen' />
            </a>
            <a
              href='http://www.hessenwaldschule.net/ '
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de la Hessenwaldschule'>
              <img src={logoHws} alt='Hessenwaldschule' />
            </a>
            <a
              href='http://www.lesbar-die-buchhandlung.de/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de la Buchhandlung Lesbar'>
              <img src={logoLesbar} alt='Buchhandlung Lesbar' />
            </a>
            <a
              href='https://www.hispanorama.de/landesverbaende/hessen/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de Spanisch Deutsch Lehrerverband'>
              <img src={logoDsg} alt='SDV' />
            </a>
            <a
              href='https://frankfurt.cervantes.es/de/start.shtm'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web del Instituto Cervantes de Frankfurt'>
              <img src={logoIc} alt='Instituto Cervantes' />
            </a>
            <a
              href='http://www.aecid.es/ES'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de AECID (cooperación)'>
              <img src={logoAecid} alt='AECID (cooperación)' />
            </a>
            <a
              href='http://alemania.embajada.gov.co/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de la embajada de Colombia'>
              <img src={logoColombia} alt='Cancillería (Colombia)' />
            </a>
            <a
              href='http://www.echile.de/index.php/de/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de la embajada de Chile'>
              <img src={logoChile} alt='Consulado de Chile' />
            </a>
            <a
              href='https://consulmex.sre.gob.mx/frankfurt/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web del consulado de México'>
              <img src={logoMexico} alt='Consulado de México' />
            </a>
            <a
              href='https://www.grupo-sm.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web del grupo SM'>
              <img src={logoSm} alt='Grupo SM' />
            </a>
            <a
              href='https://www.cornelsen.de/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de Cornelsen'>
              <img src={logoCornelsen} alt='Cornelsen' />
            </a>
            <a
              href='https://edinumen.es/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de Edinumen'>
              <img src={logoEdinumen} alt='Edinumen' />
            </a>
            <a
              href='https://www.klett.de/index/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de Klett'>
              <img src={logoKlett} alt='Klett' />
            </a>
            <a
              href='http://www.consulado.pe/es/frankfurt/Paginas/Inicio.aspx'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Enlace a la página web de Consulado del Perú en Frankfurt'>
              <img src={logoPeru} alt='Klett' />
            </a>
          </article>
        </section>
      </div>
    </footer>
  )
}

export default Footer
