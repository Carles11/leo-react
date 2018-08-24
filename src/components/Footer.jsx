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
        const kindOf = item.external ? 'external' : 'internal'

        return (
          <li key={item.label}>
            <Button label={item.label} link={item.url} kindOf={kindOf} />
          </li>
        )
      })}
    </ul>
  </footer>

export default Footer
