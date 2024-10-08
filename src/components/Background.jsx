import React from 'react';
import PropTypes from 'prop-types';

class Background extends React.PureComponent {
  state = { render: false };

  static propTypes = {
    css: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    css: '',
  };

  componentDidMount() {
    setTimeout(() => this.setState({ render: true }));
  }

  render() {
    const { css, label, url } = this.props;
    const render = this.state.render ? 'app-background-render' : '';

    return (
      <figure className={`app-background ${css} ${render}`}>
        <img src={url} alt={label} />
      </figure>
    );
  }
}

export default Background;
