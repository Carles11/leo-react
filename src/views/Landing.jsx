import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Contest from '../components/Contest'
import ImageGallery from '../components/ImageGallery'
import Register from '../components/Register'

const Landing = (props) => {
  const { DIC } = props

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
      <Contest DIC={DIC} />
      <article className="app-section app-section-1">
        <ImageGallery />
      </article>
      <Register DIC={DIC} />
    </section>
  )
}

export default Landing
