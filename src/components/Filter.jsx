import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  state = {
    visible: false,
  };

  static propTypes = {
    filter: PropTypes.object.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };

  handleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  handleFilter = (e) => {
    this.setState({ visible: false }, this.props.handleFilter(e));
  };

  render() {
    const { filter } = this.props;
    const { visible } = this.state;
    const active = visible ? 'active' : '';

    return (
      <div className="app-filter">
        <div className="app-filter-label">
          <p>Mostrar imágenes de la edición... </p>
          <button id="btn_visibility" onMouseEnter={this.handleVisibility}>
            {/* <span>{'Año'.toUpperCase()}</span> */}
            <span className="icon-arrow-down-circle" />
          </button>
          <ul className={`app-filter-list ${active}`}>
            {Object.keys(filter).map((k) => (
              <li className="app-filter-item" key={k}>
                <button
                  id={`btn_${k}`}
                  data-year={k}
                  data-count={filter[k]}
                  onClick={this.handleFilter}
                  disabled={!visible}
                >
                  {k}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
