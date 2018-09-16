import React from 'react'
import Button from './Button'

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

const footerStr = [
  { label: 'Aviso legal', url: '/aviso-legal' },
  { label: 'Facebook', url: 'https://facebook.com', external: true },
  {
    label: 'HessenWald Schule',
    url: 'http://hessenwaldschule.net',
    external: true,
  },
  { label: 'Impressum', url: '/impressum' },
  { label: 'Admin', url: '/admin' },
]

const Footer = (props) => {
  const { DIC } = props

  const copy = `${new Date().getFullYear()}  ${DIC.HEADER_MAIN}`

  return (
    <footer className="app-footer">
      <div className="app-footer-wrapper w1024">
        <ul className="app-footer-links">
          {footerStr.map(item => (
            <li key={item.label}>
              <Button label={item.label} link={item.url} external={!!item.external} />
            </li>
          ))}
          <li>
            <span>
							&copy;&nbsp;
              {copy}
            </span>
          </li>
        </ul>
        <section className="app-footer-imgs">
          <h3>
            {DIC.SPONSOR}
          </h3>
          <article>
            <img src={logoHws} alt="Hessenwald Schule" />
            <img src={logoHessen} alt="Hessen" />
            <img src={logoDsg} alt="Dsg" />
            <img src={logoIc} alt="Instituto Cervantes" />
            <img src={logoAecid} alt="Aecid" />
            <img src={logoColombia} alt="Embajada de Colombia" />
            <img src={logoChile} alt="Embajada de Chile" />
            <img src={logoMexico} alt="Embajada de Mexico" />
            <img src={logoSm} alt="SM" />
            <img src={logoCornelsen} alt="Cornelsen" />
            <img src={logoEdinumen} alt="Edinumen" />
            <img src={logoKlett} alt="Klett"/>
          </article>
        </section>
      </div>
    </footer>
  )
}

export default Footer
