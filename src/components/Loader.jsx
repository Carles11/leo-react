import React from 'react'
import PropTypes from 'prop-types'

import loader from '../assets/imgs/loader.png'

const Loader = props => 
  <div className={`app-loader ${props.css}`}> 
    <img src={loader} className="app-loader-icon" alt="Loader icon"/>
    <h3 className="app-loader-msg">{props.msg}</h3>
  </div>

Loader.propTypes = {
  css: PropTypes.string,
  msg: PropTypes.string
}

export default Loader