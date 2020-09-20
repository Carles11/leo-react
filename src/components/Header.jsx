import React from 'react'
import PropTypes from 'prop-types'

import Background from './Background'
import bg from '../assets/imgs/bg.jpg'
import logo from '../assets/imgs/logo.png'

const CSS_NAME = 'app-header-bg'

const Header = (props) => {
  const { DIC } = props

  return (
    <header className='app-section h725'>
      <div className='app-header'>
        <h1 className='tit-header mb2rem'>{DIC.HEADER_MAIN}</h1>
        <img src={logo} alt={DIC.HEADER_MAIN} />
        <h2 className='subtit-header'>{DIC.DESCRIPTION}</h2>
        <h3 className='mt0'>{DIC.SUBDESCRIPTION}</h3>
        {/* <h4 className='mt0 red-text'>{DIC.FORM_CANCELLATION}</h4> */}
      </div>
      <Background
        css={CSS_NAME}
        url={bg}
        label={`${DIC.HEADER_MAIN}, ${DIC.DESCRIPTION}`}
      />
    </header>
  )
}

Header.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Header
