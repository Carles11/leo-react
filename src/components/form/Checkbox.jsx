import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {
  state = {
    active: false
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    send: PropTypes.bool.isRequired
  }

  componentDidUpdate(prevProps) {
    const { send } = this.props
    if (prevProps.send !== send) {
      this.setState({ active: false })
    }
  }

  handleClick = e => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
    const { active } = this.state
    const { label, handleCheckbox } = this.props
    const id = `${label}_checkbox`

    return (
      <div className="app-form-checkbox">
        <input 
          id={id} 
          type="checkbox" 
          value={label}
          checked={active} 
          onChange={handleCheckbox}
        />
        <label 
          onClick={this.handleClick}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox