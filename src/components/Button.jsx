import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = props => {
  const { link, label, type, kindOf, func } = props
  const span = <span className="line"><span></span><span></span></span>

  switch (kindOf) {
    case 'internal':
      return <Link className="btn-link" aria-label={label} to={link}>{label}{span}</Link>
    case 'external':
      return <a className="btn-link" aria-label={label} href={link}>{label}{span}</a>
    case 'button':
      return <button type={type} aria-label={label} className="btn m1rem">{label}{span}</button>
    default:
      return <Link className="btn-link" aria-label={label} to={link}>{label}{span}</Link>
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  kindOf: PropTypes.string.isRequired,
  type: PropTypes.string,
  link: PropTypes.string,
  func: PropTypes.func,
}

export default Button