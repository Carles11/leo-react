import React from 'react';
import Helmet from 'react-helmet';

import withScroll from '../components/HOC/withScroll';
import * as API from '../utils/API';

class Lectura extends React.PureComponent {
  state = { data: [], audio: '' };

  async componentDidMount() {
    const promise = await API.get('documents');

    if (promise.success) {
      this.setState({ data: promise.data });
    }
  }

  handleAudio = (audio) => {
    this.setState({ audio });
    const audioURL = new Audio(audio);
    audioURL.play;
  };

  render() {
    const { DIC } = this.props;
    const { data, audio } = this.state;
    return (
      <section className="app-content pb2rem mb2rem">
        <Helmet
          title={DIC.NAV_TEXTOS}
          meta={[
            { name: 'description', content: `${DIC.NAV_TEXTOS}` },
            { property: 'og:title', content: `${DIC.NAV_TEXTOS}` },
          ]}
        />
        <header>
          <h1 className="tit-header mb2rem">{DIC.NAV_TEXTOS}</h1>
        </header>
        <div className="app-section-width app-section-boxes">
          {data.length > 0 &&
            data
              .sort((a, b) => (a.year > b.year ? -1 : 1))
              .map((d) => (
                <React.Fragment key={d._id}>
                  {d.year === 2024 ? (
                    <h2 className="subtit-section subtit-section-underline txt-center w100">
                      {d.title}
                      <br />
                      <small className="txt-center">
                        * Textos A1-B1 leídos por Sara Casado.
                      </small>
                      <br />
                      <small className="txt-center margin-text">
                        * Textos B2 leídos por:
                      </small>
                      <ul className="decoration-none">
                        <small>
                          <li>Texto 1: Norma Palacios</li>
                        </small>
                        <small>
                          <li>Texto 2: Gema Bonnín</li>
                        </small>
                        <small>
                          <li>Texto 3: Carolín Fuentes</li>
                        </small>
                        <small>
                          <li>Texto 4: Heidy González</li>
                        </small>
                        <small>
                          <li>Texto 5: María E. Martínez</li>
                        </small>
                      </ul>{' '}
                    </h2>
                  ) : null}

                  {d.year === 2025 &&
                    d.projects.map((project) => (
                      <article
                        key={project.title}
                        className="app-section-box mb2rem"
                      >
                        <h2 className="txt-highlight">{project.title}</h2>
                        <ul className="app-list">
                          {project.items.map((item) => (
                            <li key={item.title} className="app-list-item">
                              <header className="app-list-header">
                                <h2>{item.title}</h2>
                                <div className="app-list-content-btn">
                                  {item.audio && (
                                    <button
                                      aria-label={`Escuchar el audio '${item.title}'`}
                                      onClick={() =>
                                        this.handleAudio(item.audio)
                                      }
                                      className="app-list-btn icon-headphones"
                                      title={`Escuchar el audio '${item.title}'`}
                                    >
                                      <span className="hidden">
                                        {`Escuchar el audio '${item.title}'`}
                                      </span>
                                    </button>
                                  )}

                                  <a
                                    aria-label={`Descargar el texto '${item.title}'`}
                                    download={item.url}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="app-list-btn icon-arrow-down-circle"
                                    title={`Descargar el texto '${item.title}'`}
                                  >
                                    <span className="hidden">
                                      {`Descargar el texto '${item.title}'`}
                                    </span>
                                  </a>
                                </div>
                              </header>
                              {audio === item.audio && (
                                <div className="mini-grid-row">
                                  {/* 
                                  ########  Somehow starting 2024 the audio tag stopped working. We need to use iframe now ########
                                  <audio
                                    className="app-audio"
                                    src={audio}
                                    controls="controls"
                                    autoPlay
                                  >
                                    Your browser does not support the{' '}
                                    <code>audio</code> element.
                                  </audio> */}
                                  <iframe
                                    frameborder="1"
                                    width="10"
                                    height="10"
                                    src={audio}
                                  ></iframe>
                                  <small className="mini-grid-margin">
                                    Descargando archivo...
                                  </small>
                                </div>
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
    );
  }
}

const LecturaWithScroll = withScroll(Lectura);

export const Unwrapped = Lectura;
export default LecturaWithScroll;
