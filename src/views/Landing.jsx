import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
// import ReactMessages from 'react-messages';
import Cookies from 'universal-cookie';

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
    const cookies = new Cookies('registered');

    if (cookies.get('firstTimeVisit')) {
      setFirstVisit(false); //Modal does not open if cookie exists
    } else if (!cookies.get('firstTimeVisit')) {
      cookies.set('firstTimeVisit', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      });
      setFirstVisit(true); //Creates a cookie and shows modal.
    }
  }, []);

  const message = (
    <div className="aviso-portada">
      <h1>Cursillo preparatorio en línea: Leo, leo 2023.</h1>
      <p>Jueves 1 de diciembre de 2022, de 16.30 a 17.30</p>
      <p>
        Inscripción al cursillo: Mandar un correo a{' '}
        <strong>
          <a href="mailto:a.feregrino-langer@adolf-reichwein-schule.net">
            {' '}
            esta dirección
          </a>
        </strong>
      </p>
    </div>
  );

  // const runMessage = () => {
  //   console.log('FIRATSVIAIISISSSIITITTT', firstVisit);
  //   return <ReactMessages message={message} duration={7000} />;
  // };

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
      {firstVisit && message}
      <Contest DIC={DIC} PARAGRAPHS={PARAGRAPHS} />
      <Register DIC={DIC} />
      <article className="app-section app-section-2">
        <ImageGallery />
      </article>
    </section>
  );
};

export default Landing;
