import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = props => {
  const { link, label, type } = props
  const span = <span className="line"><span></span><span></span></span>
  const Component = link 
    ? <Link className="btn" to={link}>{label}{span}</Link>
    : <button type={type} className="btn">{label}{span}</button>

  return Component
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  func: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default Button