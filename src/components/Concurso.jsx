import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PARAGRAPHS = [
  { label: 'CONCURSO', link: '' }, 
  { label: 'CONCURSO_EDICION', link: '' }, 
  { label: 'CONCURSO_ORGANIZA', link: '' }, 
  { label: 'CONCURSO_PARTICIPAR', link: '' }, 
  { label: 'CONCURSO_PATROCINA', link: '' }, 
]

const Concurso = props => {
  const { DIC } = props

  return (
    <article className="app-section app-section-boxes app-section-0">
      {PARAGRAPHS.map(p => {
        const link = p.link ? <Link to={p.link}>{`Go to ${DIC[p.label]}`}</Link> : ''
        
        return (
          <div key={p.label} className="app-section-box">
            <h2 className="tit-box">{DIC[p.label]}</h2>
            <p className="txt">{DIC[p.label + '_TXT']}</p>
            {link }
          </div>
        )
      })}
    </article>
  )
}

Concurso.propTypes = {
  DIC: PropTypes.object.isRequired
}

export default Concurso