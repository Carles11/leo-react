import React from 'react'
import Helmet from 'react-helmet'

import Button from '../components/Button'

const Landing = (props) => {
  const { DIC } = props

  return (
    <section className="app-content pb2rem mb2rem">
      <Helmet
        title={DIC.NOTFOUND}
        meta={[
				  { name: 'description', content: `${DIC.NOTFOUND}` },
				  { property: 'og:title', content: `${DIC.NOTFOUND}` },
        ]}
      />
      <header>
        <h1 className="tit-header">
					Oops!!&nbsp;
          {DIC.NOTFOUND}
        </h1>
      </header>
      <article className="app-column-center">
        <p className="txt-center">
          {DIC.NOTFOUND_TXT}
        </p>
        <Button label="Volver a la página de inicio" link="/" external={false} />
      </article>
    </section>
  )
}

export default Landing
