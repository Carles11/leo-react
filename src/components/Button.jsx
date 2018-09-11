import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = props => {
  const { link, label, type, external, css } = props
  const span = <span className="line"><span></span><span></span></span>

  switch (external) {
    case false: return <Link className={`btn-link ${css}`} aria-label={label} to={link}>{label}{span}</Link>
    case true: return <a className={`btn-link ${css}`} aria-label={label} href={link}>{label}{span}</a>
    default: return <button type={type} aria-label={label} className={`btn ${css}`}>{label}{span}</button>
  }
}

Button.defaultProps = {
  css: ''
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  type: PropTypes.string,
  link: PropTypes.string,
}

export default Button