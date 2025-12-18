import React from 'react';
import Helmet from 'react-helmet';

import withScroll from '../components/HOC/withScroll';
import * as API from '../utils/API';

class Lectura extends React.PureComponent {
  state = {
    data: [],
  };

  async componentDidMount() {
    const promise = await API.get('documents');

    if (promise.success) {
      this.setState({ data: promise.data });
    }
  }

  handleDownloadAudio = (url, title) => {
    const extension = '. mp3';
    const filename = `${title}${extension}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  handleDownloadDocument = (url, title) => {
    const urlParts = url.split('? ')[0];
    const extension = urlParts.match(/\.(pdf|doc|docx|txt)$/i)?.[0] || '.pdf';
    const filename = `${title}${extension}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  render() {
    const { DIC } = this.props;
    const { data } = this.state;

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
                  {d.year === 2024 && (
                    <h2 className="subtit-section subtit-section-underline txt-center w100">
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
                      </ul>
                    </h2>
                  )}

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
                                  {/* Audio download button */}
                                  {item.audio && (
                                    <button
                                      aria-label={`Descargar el audio '${item.title}'`}
                                      onClick={() =>
                                        this.handleDownloadAudio(
                                          item.audio,
                                          item.title,
                                        )
                                      }
                                      className="app-list-btn icon-headphones"
                                      title={`Descargar el audio '${item.title}'`}
                                      type="button"
                                    >
                                      <span className="hidden">
                                        {`Descargar el audio '${item.title}'`}
                                      </span>
                                    </button>
                                  )}

                                  {/* Document download button */}
                                  <button
                                    aria-label={`Descargar el texto '${item.title}'`}
                                    onClick={() =>
                                      this.handleDownloadDocument(
                                        item.url,
                                        item.title,
                                      )
                                    }
                                    className="app-list-btn icon-arrow-down-circle"
                                    title={`Descargar el texto '${item.title}'`}
                                    type="button"
                                  >
                                    <span className="hidden">
                                      {`Descargar el texto '${item.title}'`}
                                    </span>
                                  </button>
                                </div>
                              </header>
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
