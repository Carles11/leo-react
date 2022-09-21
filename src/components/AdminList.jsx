import React from 'react';
import PropTypes from 'prop-types';
import ReactMessages from 'react-messages';
import ReactToPrint from 'react-to-print';

import * as API from '../utils/API';
import Loader from './Loader';
import PrintComponent from './PrintComponent';
import ExcelExport from '../components/ExcelExport';

class AdminList extends React.Component {
  state = {
    loaded: false,
    list: [],
    filteredList: [],
    year: null,
    error: {
      message: 'Hay algún problema al cargar el listado, inténtalo más tarde.',
      next: false,
      icon: 'warning',
      state: true,
    },
    visible: false,
  };

  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { error } = this.state;
    const { type } = this.props;
    const promise = await API.get(type);

    if (promise.success) {
      this.setState({ list: promise.data, loaded: true });
    } else {
      this.setState({
        error: Object.assign(error, { next: true }),
        loaded: true,
      });
    }
  };

  handleRemove = async (e) => {
    const { id } = e.target.dataset;
    const { error } = this.state;
    const { type } = this.props;
    const c = window.confirm(
      'Estás seguro de que quieres eliminar esta escuela? Ten en cuenta que esta es una acción irreversible.'
    );

    if (c) {
      const promise = await API.remove(`${type}/${id}`);

      if (promise.success) {
        this.setState({ list: promise.data, loaded: true });
      } else {
        this.setState({
          error: Object.assign(error, { next: true }),
          loaded: true,
        });
      }
    }
  };

  handleShow = (e) => {
    const { id } = e.target.dataset;
    const el = document.querySelector(`.app-list-content[data-id="${id}"]`);

    if (!el.classList.contains('show')) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  };

  handleVisibility = () => {
    console.log('handleVisibility------');

    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  handleFilter = (e) => {
    console.log('handleFilter-----');
    const yearsOptions = this.state.list;
    const { year } = e.target.dataset;
    const schools = yearsOptions.filter(
      (school) => school.year === Number(year)
    );

    this.setState({ filteredList: schools, year });
    this.handleVisibility();
  };

  unite = (data) => {
    const editions = data.map((item) => item.year);

    const uniqueEditions = [...new Set(editions)];
    return uniqueEditions;
  };

  executeSeveralFuncs = (e) => {
    this.handleFilter(e);
    this.handleVisibility;
  };

  render() {
    const { list, filteredList, year, loaded, error, visible } = this.state;
    const mailAddress = list.map((l) => l.email).join(',');
    const active = visible ? 'active' : '';

    const existingYears = this.unite(list);
    console.log('existingYears', existingYears);

    const PrintButton = (
      <button
        type="button"
        aria-label="Descargar PDF"
        className="btn btn-invert"
      >
        Descargar .pdf / Imprimir
      </button>
    );
    const YearFilter = (
      <div>
        {' '}
        <button
          type="button"
          aria-label="Year filtering"
          className="btn btn-invert"
          onMouseOver={this.handleVisibility}
        >
          Filtrar año <span className="icon-arrow-down-circle" />
        </button>
        <ul className={`year-filter-list ${active}`}>
          {existingYears.map((k) => (
            <li className="app-filter-item" key={k}>
              <button
                id={`btn_${k}`}
                data-year={k}
                data-count={existingYears[k]}
                onClick={(e) => this.executeSeveralFuncs(e)}
                disabled={!visible}
              >
                {k}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );

    const SendToAllButton = (
      <a
        href={`mailto:${mailAddress}`}
        aria-label="Correo a todas las escuelas"
        className="btn btn-invert"
      >
        Enviar correo a todos
      </a>
    );

    const ExportToExcelButton = <ExcelExport schools={list} />;

    return (
      <div>
        {!loaded && <Loader />}
        {loaded && (
          <article>
            <header className="app-admin-title">
              <h1>
                Colegios registrados:{' '}
                <small>{year ? filteredList.length : list.length}</small>
              </h1>
              <div className="app-list-button">{SendToAllButton}</div>
              <div>
                <ReactToPrint
                  trigger={() => PrintButton}
                  content={() => this.componentRef}
                  documentTitle={() => 'Exportar Excel'}
                />
              </div>
              <div className="app-list-button">{ExportToExcelButton}</div>
              <div className="app-list-button_last">{YearFilter}</div>
            </header>
            <ReactMessages
              message={error.message}
              next={error.next}
              error={error.state}
              icon={error.icon}
              duration={5000}
            />
            <PrintComponent
              data={list}
              year={year}
              filteredData={filteredList}
              handleRemove={this.handleRemove}
              handleShow={this.handleShow}
              ref={(el) => (this.componentRef = el)}
            />
          </article>
        )}
      </div>
    );
  }
}

export default AdminList;
