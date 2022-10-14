import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import Contest from '../components/Contest';
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import Register from '../components/Register';
import { PARAGRAPHS } from '../utils/constants';

// console.log(process.env);
const Landing = (props) => {
  const [firstVisit, setFirstVisit] = useState(false);
  const { DIC } = props;

  useEffect(() => {
    if (cookies.get('firstTimeVisit')) {
      setFirstVisit(false); //Modal does not open if cookie exists
    } else if (!cookies.get('firstTimeVisit')) {
      cookies.set('firstTimeVisit', 'true', {
        path: '/',
      });
      setFirstVisit(true); //Creates a cookie and shows modal.
    }
  }, []);

  return (
    <section className="app-landing">
      <Helmet
        title={DIC.DESCRIPTION}
        meta={[
          { name: 'description', content: `${DIC.DESCRIPTION}` },
          { property: 'og:title', content: `${DIC.DESCRIPTION}` },
        ]}
      />
      <Header DIC={DIC} />
      <Contest DIC={DIC} PARAGRAPHS={PARAGRAPHS} />
      <Register DIC={DIC} />
      <article className="app-section app-section-2">
        <ImageGallery />
      </article>
    </section>
  );
};

export default Landing;
