import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// import withScroll from '../components/HOC/withScroll';

const Impresos = (props) => {
  const { DIC } = props;

  return (
    <div className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NAV_IMPRESOS}
        meta={[
          { name: 'description', content: `${DIC.NAV_IMPRESOS}` },
          { property: 'og:title', content: `${DIC.NAV_IMPRESOS}` },
        ]}
      />
      <header>
        <h1 className="tit-header mb2rem">{DIC.NAV_IMPRESOS}</h1>
      </header>
      <article className="app-section-width">
        <p className="txt">
          <strong className="txt-highlight">Impresos&nbsp;</strong>
        </p>
      </article>
    </div>
  );
};

Impresos.propTypes = {
  DIC: PropTypes.object.isRequired,
};

// const ImpresosWithScroll = withScroll(Impresos);

// export const Unwrapped = Impresos;
export default Impresos;
