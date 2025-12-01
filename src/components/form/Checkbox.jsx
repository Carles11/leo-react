import PropTypes from 'prop-types';
import React from 'react';

class Checkbox extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    text: PropTypes.string, // optional
  };

  render() {
    const { label, handleCheckbox, checked, disabled, text } = this.props;
    const id = `${label}_checkbox`;

    return (
      <div className="app-form-checkbox">
        <input
          id={id}
          type="checkbox"
          value={label}
          checked={checked}
          onChange={handleCheckbox}
          data-key={label}
          disabled={disabled}
        />
        <label htmlFor={id}>{text || label}</label>
      </div>
    );
  }
}

export default Checkbox;
