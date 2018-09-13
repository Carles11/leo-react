import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'

import * as API from '../utils/API'
import Loader from './Loader'
import Button from './Button'

class List extends React.Component {
  state = {
    loaded: false,
    list: [],
    error: {
      message: 'Hay algún problema al cargar el listado, inténtalo mas tarde.',
      next: false,
      icon: 'warning',
      state: true
    }
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
      this.setState({ error: Object.assign(error, { next: true }), loaded: true })
    }
    
  }

  render() {
    const { list, loaded, error } = this.state
    console.log(list)
    return (
      <React.Fragment>
        {!loaded && <Loader />}
        {loaded && 
        <article>
          <ul className="app-list">
            <ReactMessages message={error.message} next={error.next} error={error.state} icon={error.icon} duration={5000} />
            {Boolean(list.length) && list.map(item => {
              return (
                <li className="app-list-item" key={item._id}>
                  <h2>
                    {item.name}
                  </h2>
                  <button className="app-list-btn" arial-label="Editar">
                    <span className="icon-pencil"></span>
                  </button>
                  <button className="app-list-btn" arial-label="Editar">
                    <span className="icon-close"></span>
                  </button>
                  <button className="app-list-btn" arial-label="Editar">
                    <span className="icon-down"></span>
                  </button>
                </li>
              )
            })}
            {list.length === 0 && <p className="txt">Todavía no hay ningún item en el listado.</p>}
          </ul>
        </article>
        }
      </React.Fragment>
    )
  }
}

List.propTypes = {
  type: PropTypes.string.isRequired
}

export default List