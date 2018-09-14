import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'

import * as API from '../utils/API'
import Loader from './Loader'
import Item from './Item'

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

  handleRemove = async e => {
    const { id } = e.target.dataset
    const { error } = this.state
    const { type } = this.props
    const c = window.confirm('Estás seguro qué quieres eliminar está escuela? Ten en cuenta que es una acción irreversible.')
    
    if (c) {
      const promise = await API.remove(`${type}/${id}`)
      if (promise.success) {
        this.setState({ list: promise.data, loaded: true })
      } else {
        this.setState({ error: Object.assign(error, { next: true }), loaded: true })
      }
    }
  }

  render() {
    const { list, loaded, error } = this.state
    const { type } = this.props  
    
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
                  <Item 
                    item={item}
                    handleRemove={this.handleRemove}
                  />
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