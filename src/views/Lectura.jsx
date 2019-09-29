import React from 'react'
import Helmet from 'react-helmet'

import withScroll from '../components/HOC/withScroll'
import * as API from '../utils/API'

class Lectura extends React.PureComponent {
  state = { data: [], audio: '' }

  async componentDidMount() {
    const promise = await API.get('documents')

    if (promise.success) {
      this.setState({ data: promise.data })
    }
  }

  handleAudio = audio => {
    this.setState({ audio })
  }

  render() {
    const { DIC } = this.props
    const { data, audio } = this.state

    return (
      <section className='app-content pb2rem mb2rem'>
        <Helmet
          title={DIC.NAV_TEXTOS}
          meta={[
            { name: 'description', content: `${DIC.NAV_TEXTOS}` },
            { property: 'og:title', content: `${DIC.NAV_TEXTOS}` },
          ]}
        />
        <header>
          <h1 className='tit-header mb2rem'>{DIC.NAV_TEXTOS}</h1>
        </header>
        <div className='app-section-width app-section-boxes'>
          {!!data.length &&
            data
              .sort((a, b) => (a.year > b.year ? -1 : 1))
              .map(d => (
                <React.Fragment key={d._id}>
                  <h2 className='subtit-section subtit-section-underline txt-center w100'>
                    {d.title}
                    <br />
                    <small className='txt-center'>
                      * Textos leídos por Sara Casado Ocaña
                    </small>
                  </h2>

                  {d.projects.map(project => (
                    <article
                      key={project.title}
                      className='app-section-box mb2rem'>
                      <h2 className='txt-highlight'>{project.title}</h2>
                      <ul className='app-list'>
                        {project.items.map(item => (
                          <li key={item.title} className='app-list-item'>
                            <header className='app-list-header'>
                              <h2>{item.title}</h2>
                              <div className='app-list-content-btn'>
                                {item.audio && (
                                  <button
                                    aria-label={`Escuchar el audio '${item.title}'`}
                                    onClick={() => this.handleAudio(item.audio)}
                                    className='app-list-btn icon-headphones'
                                    title={`Escuchar el audio '${item.title}'`}>
                                    <span className='hidden'>
                                      {`Escuchar el audio '${item.title}'`}
                                    </span>
                                  </button>
                                )}

                                <a
                                  aria-label={`Descargar el texto '${item.title}'`}
                                  download={item.url}
                                  href={item.url}
                                  className='app-list-btn icon-arrow-down-circle'
                                  title={`Descargar el texto '${item.title}'`}>
                                  <span className='hidden'>
                                    {`Descargar el texto '${item.title}'`}
                                  </span>
                                </a>
                              </div>
                            </header>
                            {audio === item.audio && (
                              <audio
                                className='app-audio'
                                src={audio}
                                controls='controls'
                                autoPlay>
                                Your browser does not support the{' '}
                                <code>audio</code> element.
                              </audio>
                            )}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </React.Fragment>
              ))}
        </div>
      </section>
    )
  }
}

const LecturaWithScroll = withScroll(Lectura)

export const Unwrapped = Lectura
export default LecturaWithScroll
