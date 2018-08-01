import React from 'react'

const withWindow = Component => (
  class extends React.Component {
    state = {
      position: 0
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      const position = window.scrollY
      
      this.setState({ position })
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
)

export default withWindow