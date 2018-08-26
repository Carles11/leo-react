import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const PARAGRAPHS = [
  { title: 'CONCURSO', label: 'NAV_BASES', url: '/bases-del-concurso' }, 
  { title: 'CONCURSO_EDICION', label: '' }, 
  { title: 'CONCURSO_ORGANIZA', label: '' }, 
  { title: 'CONCURSO_PARTICIPAR', label: '' }, 
  { title: 'CONCURSO_PATROCINA', label: '' }, 
]

const Contest = props => {
  const { DIC } = props

  return (
    <article className="app-section app-section-boxes app-section-0 h725">
      {PARAGRAPHS.map(p => {
        const link = p.url 
          ? <Button link={p.url} label={`${DIC[p.label]}`} external={false} /> 
          : ''
        
        return (
          <div key={p.title} className="app-section-box">
            <h2 className="tit-box">{DIC[p.title]}</h2>
            <p className="txt">{DIC[p.title + '_TXT']}</p>
            {link}
          </div>
        )
      })}
    </article>
  )
}

Contest.propTypes = {
  DIC: PropTypes.object.isRequired
}

export default Contest
