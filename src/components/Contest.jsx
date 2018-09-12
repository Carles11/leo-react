import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const PARAGRAPHS = [
  { title: 'CONCURSO', url: '/bases-del-concurso' }, 
  { title: 'CONCURSO_EDICION', url: '/bases-del-concurso' }, 
  { title: 'CONCURSO_ORGANIZA'}, 
  { title: 'CONCURSO_PARTICIPAR' }, 
  { title: 'CONCURSO_PATROCINA'}, 
]

const Contest = props => {
  const { DIC } = props

  return (
    <article className="app-section app-section-boxes app-section-0 h725">
      {PARAGRAPHS.map(p => {
        const link = p.url 
          ? <Button link={p.url} label={`${DIC.MORE_INFO}`} external={false} /> 
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
