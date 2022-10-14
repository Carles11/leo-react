import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
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
    const nextWeek = new Date();

    // add 7 days to the current date
    nextWeek.setDate(new Date().getDate() + 7);

    const expDate14d = nextWeek;

    if (cookies.get('firstTimeVisit')) {
      setFirstVisit(true); //Modal does not open if cookie exists
    } else if (!cookies.get('firstTimeVisit')) {
      cookies.set('firstTimeVisit', 'true', {
        path: '/',
        maxAge: expDate14d, // sets validity to 14 days from now
      });
      setFirstVisit(true); //Creates a cookie and shows modal.
    }
  }, []);

  const message = (
    <div className="aviso-portada">
      <h1>
        Cursillo preparatorio en línea <br />
        para colegios que se inscriben por primera vez.
      </h1>
      <p>Jueves 1 de diciembre de 2022, de 16.30 a 17.30 h</p>
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
