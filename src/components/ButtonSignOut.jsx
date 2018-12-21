import React from 'react'
import PropTypes from 'prop-types'

const ButtonSignOut = (props) => {
  const { handleClick, label } = props
  const labelTxt = label ? label.toUpperCase() : ''

  return (
    <button
      className="btn-signOut"
      aria-label="Cerrar el Panel de administración"
      onClick={handleClick}
    >
      {labelTxt}
      <span className="icon-stand-by" />
    </button>
  )
}

ButtonSignOut.defaultProps = {
  label: '',
}

ButtonSignOut.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default ButtonSignOut
