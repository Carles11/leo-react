import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const Item = props => {
  const { item, handleRemove, handleShow } = props 

  return (
    <React.Fragment>
      <h2>
        {item.name}
      </h2>
      <div data-id={item._id} className="app-list-content">
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
          arial-label="Remove Item"
          data-id={item._id}
          onClick={handleRemove}
        >
        </button>
        <button 
          className="app-list-btn icon-down" 
          arial-label="Show Item"
          data-id={item._id}
          onClick={handleShow}
        >
        </button>
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired
}

export default Item