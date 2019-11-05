import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'
import ReactToPrint from 'react-to-print'

import * as API from '../utils/API'
import Loader from './Loader'
import PrintComponent from './PrintComponent'
import ExcelExport from '../components/ExcelExport'

class AdminList extends React.Component {
  state = {
    loaded: false,
    list: [],
    error: {
      message: 'Hay algún problema al cargar el listado, inténtalo más tarde.',
      next: false,
      icon: 'warning',
      state: true,
    },
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const { error } = this.state
    const { type } = this.props
    const promise = await API.get(type)

    if (promise.success) {
      this.setState({ list: promise.data, loaded: true })
    } else {
      this.setState({
        error: Object.assign(error, { next: true }),
        loaded: true,
      })
    }
  }

  handleRemove = async e => {
    const { id } = e.target.dataset
    const { error } = this.state
    const { type } = this.props
    const c = window.confirm(
      'Estás seguro de que quieres eliminar esta escuela? Ten en cuenta que esta es una acción irreversible.',
    )

    if (c) {
      const promise = await API.remove(`${type}/${id}`)

      if (promise.success) {
        this.setState({ list: promise.data, loaded: true })
      } else {
        this.setState({
          error: Object.assign(error, { next: true }),
          loaded: true,
        })
      }
    }
  }

  handleShow = e => {
    const { id } = e.target.dataset
    const el = document.querySelector(`.app-list-content[data-id="${id}"]`)

    if (!el.classList.contains('show')) {
      el.classList.add('show')
    } else {
      el.classList.remove('show')
    }
  }

  render() {
    const { list, loaded, error } = this.state
    const mailAddress = list.map(l => l.email).join(',')

    const PrintButton = (
      <button
        type='button'
        aria-label='Descargar PDF'
        className='btn btn-invert'>
        Descargar / Imprimir
      </button>
    )

    const SendToAllButton = (
      <a
        href={`mailto:${mailAddress}`}
        aria-label='Correo a todas las escuelas'
        className='btn btn-invert'>
        Enviar correo a todos
      </a>
    )

    const ExportToExcelButton = (
      <button
        type='button'
        aria-label='Exportar Excel'
        className='btn btn-invert'>
        Exportar Excel
        <ExcelExport schools={list} />
      </button>
    )

    return (
      <React.Fragment>
        {!loaded && <Loader />}
        {loaded && (
          <article>
            <header className='app-admin-title'>
              <h1>
                Colegios registrados: <small>{list.length}</small>
              </h1>
              <div className='app-list-button'>{SendToAllButton}</div>
              <div>
                <ReactToPrint
                  trigger={() => PrintButton}
                  content={() => this.componentRef}
                />
              </div>
              <div className='app-list-button'>{ExportToExcelButton}</div>
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
              handleRemove={this.handleRemove}
              handleShow={this.handleShow}
              ref={el => (this.componentRef = el)}
            />
          </article>
        )}
      </React.Fragment>
    )
  }
}

export default AdminList
