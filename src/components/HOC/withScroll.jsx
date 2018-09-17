import React from 'react'

const withScroll = Component => class extends React.Component {
  componentDidMount() {
    document.querySelector('.app-content').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render() {
    return <Component {...this.props} {...this.state} />
  }
}

export default withScroll
