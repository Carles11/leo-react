import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Item = (props) => {
  const { item, handleRemove, handleShow } = props;
  const courseIsDesired = item.interestCheckbox ? 'Sí' : 'No';
  const consentIsGiven =
    item.bases_consent && item.image_consent ? 'Confirmados' : 'Sin confirmar';

  return (
    <React.Fragment>
      <li className="app-list-item">
        <header className="app-list-header">
          <h2>{item.name}</h2>
          <div className="app-list-content-btn">
            {/* Edit button with logic to edit school 
            <button
              className="app-list-btn icon-edit-2"
              arial-label="Edit"
              data-id={item._id}
              onClick={handleEdit}
            ></button>*/}
            <button
              className="app-list-btn icon-x-circle"
              arial-label="Remove Item"
              data-id={item._id}
              onClick={handleRemove}
            />
            <button
              className="app-list-btn icon-arrow-down-circle"
              arial-label="Show Item"
              data-id={item._id}
              onClick={handleShow}
            />
          </div>
        </header>
        <section data-id={item._id} className="app-list-content show">
          <article>
            <p className="app-list-content-item">
              <small>Teléfono:</small>
              {item.phone}
            </p>
            <p className="app-list-content-item">
              <small>Dirección:</small>
              {item.address}
            </p>
            <p className="app-list-content-item">
              <small>Localidad:</small>
              {item.city}
            </p>
            <p className="app-list-content-item">
              <small>CP:</small>
              {item.cp}
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
                external
              />
            </p>
            <p className="app-list-content-item">
              <small>Categorias:</small>
              {item.category.join(', ')}
            </p>
            <p className="app-list-content-item">
              <small>Cursillo digital:</small>
              {courseIsDesired}
            </p>
            <p className="app-list-content-item">
              <small>Consentimientos?</small>
              {consentIsGiven}
            </p>
            <p className="app-list-content-item">
              <small>Edición:</small>
              {item.year}
            </p>
          </article>
        </section>
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Item;
