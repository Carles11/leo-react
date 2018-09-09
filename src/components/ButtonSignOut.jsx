import React from 'react'
import PropTypes from 'prop-types'

const ButtonSignOut = props => {
  const { handleClick } = props

  return (
    <button 
      className="btn-close" 
      aria-label="Cerrar el Panel de administración"
      onClick={handleClick}>
      <span className="icon-close"></span>
    </button>
  )
  
}

ButtonSignOut.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default ButtonSignOut