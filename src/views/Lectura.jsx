import React from 'react';
import Helmet from 'react-helmet';

import Loader from '../components/Loader';
import withScroll from '../components/HOC/withScroll';
import * as API from '../utils/API';

class Lectura extends React.PureComponent {
  state = {
    data: [],
    loaded: false,
  };

  async componentDidMount() {
    const promise = await API.get('documents');

    if (promise.success) {
      this.setState({ data: promise.data, loaded: true });
    } else {
      this.setState({ loaded: true });
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
    const { data, loaded } = this.state;

    const years = data.map((d) => d.year).filter((y) => typeof y === 'number');
    const latest = years.length ? Math.max(...years) : null;
    const edition =
      latest !== null ? data.find((d) => d.year === latest) : null;

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
        {!loaded && <Loader msg={DIC.NAV_TEXTOS} />}
        {loaded && (
          <div className="app-section-width app-section-boxes">
            {edition && edition.projects && edition.projects.length > 0 ? (
              edition.projects.map((project) => (
                <article key={project.title} className="app-section-box mb2rem">
                  <h2 className="txt-highlight">{project.title}</h2>
                  <ul className="app-list">
                    {project.items.map((item) => (
                      <li key={item.title} className="app-list-item">
                        <header className="app-list-header">
                          <h2>{item.title}</h2>
                          <div className="app-list-content-btn">
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
              ))
            ) : (
              <h4 className="txt-center">
                Los textos de lectura se publicarán aquí en breve.
              </h4>
            )}
          </div>
        )}
      </section>
    );
  }
}

const LecturaWithScroll = withScroll(Lectura);

export const Unwrapped = Lectura;
export default LecturaWithScroll;
