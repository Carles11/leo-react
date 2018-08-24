import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import getSlug from "../utils/helpers";
import Logo from "../assets/imgs/logo_tiny.png";

class Navigation extends React.Component {
  state = {
    visible: false
  };

  static propTypes = {
    nav: PropTypes.array.isRequired
  };

  handleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  handleNavigation = e => {
    const { name, dataset } = e.target;

    if (dataset.scroll) {
      setTimeout(() => {
        document.querySelector(`.${name}`).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }

    this.setState({ visible: false });
  };

  render() {
    const { nav } = this.props;
    const { visible } = this.state;
    const icon = visible ? "close" : "menu";

    const List = (
      <ul className={`app-nav-list ${icon}`}>
        <li className="app-nav-item btn-close">
          <img src={Logo} alt="Leo, leo" />
          <button onClick={this.handleVisibility}>
            <span className="txt">CERRAR</span>
            <span className={`icon-close`} />
          </button>
        </li>
        <li className="app-nav-item logo">
          <Link to="/">
            <img
              onClick={this.handleNavigation}
              data-scroll={true}
              name="app-header"
              src={Logo}
              alt="Leo, leo"
            />
          </Link>
        </li>
        {nav.map((item, i) => {
          const label = getSlug(item.label);
          const children = item.children.length ? true : false;
          const section = `app-section-${i}`;

          return (
            <li key={label} className="app-nav-item">
              <Link
                to="/"
                onClick={this.handleNavigation}
                data-scroll={true}
                name={section}
              >
                {item.label.toUpperCase()}
                {children && <span className="icon-down ml5" />}
              </Link>
              {children && (
                <ul className={`app-subnav-list`}>
                  {item.children.map(item => {
                    const link = "/" + getSlug(item);
                    return (
                      <li key={link} className="app-subnav-item">
                        <Link onClick={this.handleNavigation} to={link}>
                          {item.toUpperCase()}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );

    const ResponsiveMenu = (
      <div className={`app-respMenu ${icon}`}>
        <button className="btn-menu" onClick={this.handleVisibility}>
          <span className="txt">MENU</span>
          <span className={`icon-menu`} />
        </button>
      </div>
    );

    return (
      <nav className={`app-nav ${icon}`}>
        {!visible && ResponsiveMenu}
        {List}
        <div className={`app-menu-bg ${icon}`} />
      </nav>
    );
  }
}

export default Navigation;
