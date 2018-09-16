import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = props => {
  const { link, label, type, external, css, fn } = props
  const span = <span className="line"><span></span><span></span></span>

  switch (external) {
    case false: return <Link className={`btn-link ${css}`} aria-label={label} to={link}>{label}{span}</Link>
    case true: return <a className={`btn-link ${css}`} aria-label={label} href={link}>{label}{span}</a>
    default: return <button onClick={fn} type={type} aria-label={label} className={`btn ${css}`}>{label}</button>
  }
}

Button.defaultProps = {
  css: '',
  type: 'button',
  fn: () => {}
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  type: PropTypes.string,
  link: PropTypes.string,
}

export default Button