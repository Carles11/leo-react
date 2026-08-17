import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import * as API from '../utils/API';
import { getNextEditionYear } from '../utils/helpers';
import withScroll from '../components/HOC/withScroll';
import Loader from '../components/Loader';

class Colegios extends React.Component {
  state = { schools: [], loaded: false };

  static propTypes = {
    DIC: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const promise = await API.get('schools');

    if (promise.success) {
      this.setState({ schools: promise.data, loaded: true });
    } else {
      this.setState({ loaded: true });
    }
  }

  render() {
    const nextEditionYear = getNextEditionYear();
    const { DIC } = this.props;
    const { schools, loaded } = this.state;
    const currentSchools = schools.filter(
      (item) => item.year === nextEditionYear,
    );
    return (
      <section className="app-content pb2rem mb2rem">
        <Helmet
          title={DIC.NAV_COLEGIOS}
          meta={[
            { name: 'description', content: `${DIC.NAV_COLEGIOS}` },
            { property: 'og:title', content: `${DIC.NAV_COLEGIOS}` },
          ]}
        />
        <header>
          <h1 className="tit-header mb2rem">
            {DIC.NAV_COLEGIOS} {nextEditionYear}
          </h1>
        </header>
        {!loaded && <Loader />}
        {loaded && !currentSchools.length && (
          <h4 className="txt-center">No hay colegios inscritos todavía.</h4>
        )}
        {loaded && !!currentSchools.length && (
          <article>
            <ul className="app-list app-section-boxes">
              {currentSchools.map((item) => (
                <li key={item._id} className="app-list-item">
                  <header className="app-list-header">
                    <h2>{item.name}</h2>
                    <small>{item.address}</small>
                  </header>
                </li>
              ))}
            </ul>
          </article>
        )}
      </section>
    );
  }
}

const ColegiosWithScroll = withScroll(Colegios);

export const Unwrapped = Colegios;
export default ColegiosWithScroll;
