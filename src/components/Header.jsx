import React from 'react'
import PropTypes from 'prop-types'

//import withWindow from './withWindow'
import Background from './Background'
import bg from '../assets/imgs/bg.jpg'
import logo from '../assets/imgs/logo.png'

const CSS_NAME = 'app-header-bg' 

class Header extends React.Component {
  state = { position: 0 }

  static propTypes = {
    DIC: PropTypes.object.isRequired,
  }

  componentDidMount() {
    //const { position } = this.props
    //this.handlePosition(position)
  }

  componentWillReceiveProps(nextProps) {
    const { position } = this.props
    
    if (position !== nextProps.position) {
      this.handlePosition(position)
    }
  }

  handlePosition = (position) => {
    const percent = 100 / Number(document.querySelector(`.${CSS_NAME}`).offsetHeight)
    const val = (125 + (position * percent)).toFixed(2)

    document.documentElement.style.setProperty('--headerImgSize', `${val}%`)
  }

  render() {
    const { DIC } = this.props
    return (
      <header className="app-section">
        <div className="app-header">
          <h1 className="tit-header">{DIC.HEADER_MAIN}</h1>
          <img src={logo} alt={DIC.HEADER_MAIN} />
          <h2 className="subtit-header">{DIC.DESCRIPTION}</h2>
        </div>
        <Background 
          css={CSS_NAME}
          url={bg} 
          label={DIC.HEADER_MAIN + ', ' + DIC.DESCRIPTION} 
        />
      </header>
    )
  }
}

export default Header
