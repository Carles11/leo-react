import React from 'react'
import PropTypes from 'prop-types'

const style = {
  position: 'absolute',
  top: -9000
}

class PrintComponent extends React.Component {
  render() {
    return (
      <div style={style}>Print Component</div>
    )
  }
}

export default PrintComponent