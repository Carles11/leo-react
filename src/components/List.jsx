import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'

import API from '../utils/API'
import Loader from './Loader'

class List extends React.Component {
  state = {
    loaded: false,
    list: [],
    error: {
      message: 'Hay algún problema al cargar el listado, intentalo mas tarde.',
      next: false,
      icon: 'warning'
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const { error } = this.state
    const { type } = this.props
    const promise = await API.get(type)
    const result = await promise.json()

    if (result.success) {
      this.setState({ list: result.data, loaded: true })
    } else {
      this.setState({ error: Object.assign(error, { next: true }), loaded: true })
    }
    
  }

  render() {
    const { list, loaded, error } = this.state

    return (
      <React.Fragment>
        {!loaded && <Loader />}
        {loaded && 
          <article className="app-list">
            <ReactMessages message={error.message} next={error.next} icon={error.icon} duration={3000} />
            {list.map(item => {
              return (
                <div key={item._id}>{item.name}</div>
              )
            })}
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