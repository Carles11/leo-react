import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

class Item extends React.Component {
  state = {
    show: false
  }

  static propTypes = {
    item: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
  }

  handleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }))

    const content = document.querySelectorAll('.app-list-content')
    content.forEach(c => c.classList.remove('show'))
  }

  render() {
    const { item, handleRemove } = this.props 
    const { show } = this.state
    const showStyle = show ? 'show' : ''

    return (
      <React.Fragment>
        <h2>
          {item.name}
        </h2>
        <div className={`app-list-content ${showStyle}`}>
          <p className="app-list-content-item">
            <small>Curso:</small>
            {item.course}
          </p>
          <p className="app-list-content-item">
            <small>Teléfono:</small>
            {item.phone}
          </p>
          <p className="app-list-content-item">
            <small>Dirección:</small>
            {item.address}
          </p>
          <p className="app-list-content-item">
            <small>Contacto:</small>
            {item.contact}
          </p>
          <p className="app-list-content-item">
            <small>Email:</small>
            <Button 
              label={item.email}
              link={`mailto:${item.email}`}
              external={true}
            />
          </p>
          <p className="app-list-content-item">
            <small>Categorias:</small>
            {item.category.join(', ')}
          </p>
        </div>
        <div className="app-list-content-btn">
          {/*<button 
            className="app-list-btn icon-pencil" 
            arial-label="Edit"
          >
          </button>*/}
          <button 
            className="app-list-btn icon-close" 
            arial-label="Remove"
            data-id={item._id}
            onClick={handleRemove}
          >
          </button>
          <button 
            className="app-list-btn icon-down" 
            arial-label="show"
            onClick={this.handleShow}
          >
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default Item