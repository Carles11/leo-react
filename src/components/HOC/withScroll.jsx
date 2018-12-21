import React from 'react'

const withScroll = Component => class extends React.Component {
  componentDidMount() {
    const section = document.querySelector('.app-content')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  render() {
    return <Component {...this.props} {...this.state} />
  }
}

export default withScroll
