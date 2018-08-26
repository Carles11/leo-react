import React from 'react'
import Button from './Button'

const copy = `${(new Date()).getFullYear()} CRIF`

const footerStr = [
  { label: 'Aviso legal', url: '/aviso-legal' },
  { label: 'Facebook', url: 'https://facebook.com', external: true },
  { label: 'HessenWald Schule', url: 'http://hessenwaldschule.net', external: true },
  { label: 'Admin', url:'/admin' }
]

const Footer = () => 
  <footer className="app-footer">
    <ul>
      <li>&copy; {copy}</li>
      {footerStr.map(item => {
        const external = item.external ? true : false

        return (
          <li key={item.label}>
            <Button label={item.label} link={item.url} external={external} />
          </li>
        )
      })}
    </ul>
  </footer>

export default Footer
