import PropTypes from 'prop-types';
import React from 'react';
import ReactMessages from 'react-messages';

import * as API from '../utils/API';
import { getNextEditionYear } from '../utils/helpers';

import Einwilligung from '../assets/docus/Datenschuetzerklaerung_SCHULEN_edit_signature.pdf';
import '../css/layout/MiniGrid.css';
import {
  showCheckboxError,
  showFormErrors,
  showInputError,
} from '../utils/errorHandler';
import { isDisabled } from '../utils/helpers';
import Button from './Button';
import Checkbox from './form/Checkbox';
import SingleInput from './form/SingleInput';

const categories = ['A1', 'A2', 'B1', 'B2'];

class Register extends React.Component {
  state = {
    send: false,
    error: false,
    message: '',
    category: [],
    bases_consent: false,
    image_consent: false,
    interestCheckbox: false,
  };

  static propTypes = {
    DIC: PropTypes.object.isRequired,
  };

  handleChange = (e) => {
    e.target.classList.add('active');
    showInputError(e.target);
  };

  handleInterestCheckbox = () => {
    this.setState((prevState) => ({
      interestCheckbox: !prevState.interestCheckbox,
    }));
  };

  handleConsentsCheckbox = (e) => {
    const elem = e.target;
    const consent = e.target.value;
    const part = consent.split('_');
    const consentKey = `${part[0]}_consent`;

    if (!elem.dataset.checked) {
      elem.dataset.checked = 'checked';
    } else {
      elem.dataset.checked = '';
    }

    showCheckboxError(elem);

    this.setState((prevState) => ({
      [consentKey]: !prevState[consentKey],
    }));
  };

  handleCheckbox = (e) => {
    const { category } = this.state;
    const { value } = e.target;
    const elem = e.target;

    if (!elem.dataset.checked) {
      elem.dataset.checked = 'checked';
    } else {
      elem.dataset.checked = '';
    }
    showCheckboxError(elem);

    if (category.indexOf(value) === -1) {
      category.push(value);
    } else {
      category.splice(category.indexOf(value), 1);
    }
  };

  handleData = (e) => {
    const { category, interestCheckbox, bases_consent, image_consent } =
      this.state;
    const { elements } = e.target;
    const nextEditionYear = getNextEditionYear();

    const name = elements.name.value.trim();
    const phone = elements.phone.value.trim();
    const address = elements.address.value.trim();
    const contact = elements.contact.value.trim();
    const email = elements.email.value.trim();
    const cp = elements.cp.value.trim();
    const city = elements.city.value.trim();
    const year = nextEditionYear;

    this.cleanFields(elements);

    return {
      name,
      phone,
      address,
      contact,
      email,
      category,
      bases_consent,
      image_consent,
      interestCheckbox,
      cp,
      city,
      year,
    };
  };

  handlePost = async (body) => {
    const { DIC } = this.props;
    const promise = await API.post('schools', body);

    if (promise.success) {
      this.setState({
        send: true,
        message: DIC.MSG_SCHOOL_CREATED,
        error: false,
      });
    } else {
      this.setState({
        send: true,
        message: JSON.stringify(promise.data) || DIC.MSG_SCHOOL_ERROR,
        error: true,
      });
    }

    setTimeout(() => {
      this.setState({ send: false });
    });
  };

  cleanFields = (elem) => {
    Array.from(elem).forEach((el) => {
      el.classList.remove('active');
      el.value = '';
    });

    const checkboxes = Array.from(
      document.querySelectorAll('.app-form-whole input[type=checkbox]')
    );
    checkboxes.forEach((item) => (item.checked = false));

    this.disableButton();
  };

  disableButton = () => isDisabled(document.querySelector('.btn'));

  render() {
    const { DIC } = this.props;
    const { message, send, error, interestCheckbox } = this.state;
    // const styleMessage = {
    //   color: 'white',
    //   marginTop: 0,
    //   marginLeft: '1rem',
    // }
    return (
      <article className="app-section app-section-1 pSides05rem pb2rem">
        <ReactMessages
          message={message}
          next={send}
          duration={7000}
          error={error}
        />
        <div className="app-section-width">
          <header className="header-wrapper">
            <h2 className="tit-section pSides05rem">{DIC.FORM_TITLE}</h2>
            <h3 className="subtit-section">{DIC.FORM_SUBTITLE}</h3>

            {/* COMMENT/UNCOMMENT FOLLOWING LINE TO SHOW/HIDE MESSAGE "PLAZO DE INSCRIPCIÓN TERMINADO" */}
            <h4 className="subtit-section-red">{DIC.FORM_WARNING}</h4>
            {/* <h4 className="subtit-section-red">{DIC.FORM_CANCELLATION}</h4> */}
          </header>
          <form
            className="app-form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();

              if (showFormErrors()) {
                this.disableButton();
                this.handlePost(this.handleData(e));
              }
            }}
          >
            <SingleInput
              name="name"
              inputType="text"
              title={DIC.FORM_SCHOOL_NAME}
              placeholder={DIC.FORM_SCHOOL_NAME}
              pattern=".{6,}"
              controlFunc={this.handleChange}
              disabled
            />
            <SingleInput
              name="contact"
              inputType="text"
              title={DIC.FORM_CONTACT}
              placeholder={DIC.FORM_CONTACT}
              pattern=".{6,}"
              controlFunc={this.handleChange}
              disabled
            />

            <SingleInput
              name="address"
              inputType="text"
              title={DIC.FORM_ADDRESS}
              placeholder={DIC.FORM_ADDRESS}
              pattern=".{6,}"
              controlFunc={this.handleChange}
              disabled
            />
            <SingleInput
              name="cp"
              inputType="text"
              title={DIC.FORM_CP}
              placeholder={DIC.FORM_CP}
              pattern=".{3,}"
              controlFunc={this.handleChange}
              disabled
            />
            <SingleInput
              name="city"
              inputType="text"
              title={DIC.FORM_CITY}
              placeholder={DIC.FORM_CITY}
              pattern=".{5,}"
              controlFunc={this.handleChange}
              disabled
            />
            <SingleInput
              name="phone"
              inputType="text"
              title={DIC.FORM_PHONE}
              placeholder={DIC.FORM_PHONE}
              pattern=".{6,}"
              controlFunc={this.handleChange}
              disabled
            />
            <SingleInput
              name="email"
              inputType="email"
              title={DIC.FORM_MAIL}
              placeholder={DIC.FORM_MAIL}
              pattern=".{6,}"
              controlFunc={this.handleChange}
              disabled
            />
            <div id="checkboxWrapper" className="app-form-whole">
              <p className="app-form-label-txt txt-left">
                {DIC.FORM_CATEGORIES}
              </p>
              <p className="app-form-label-txt-error txt-left" />
              {categories.map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  handleCheckbox={this.handleCheckbox}
                  send={send}
                  disabled
                />
              ))}
            </div>

            <div className="grid-col">
              <div
                id="checkboxesBasesConsentWrapper"
                className="app-form-whole"
              >
                <p className="app-form-label-txt txt-left">
                  {DIC.FORM_CONSENT}
                </p>
                <div className="mini-grid-row">
                  <p className="app-form-label-txt-error txt-left" />
                  <Checkbox
                    key="bases"
                    id="bases-accept"
                    label="bases_consent"
                    text="Ok"
                    handleCheckbox={this.handleConsentsCheckbox}
                    send={send}
                    disabled
                  />
                  <p className="app-form-label-txt txt-left">
                    He leído y acepto{' '}
                    <a
                      className="btn-link-auth"
                      href="https://www.leo-leo-hessen.com/bases-del-concurso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>las bases</strong>
                    </a>{' '}
                    del concurso {getNextEditionYear()}
                  </p>
                </div>
              </div>

              <div
                id="checkboxesImageConsentWrapper"
                className="app-form-whole"
              >
                <div className="mini-grid-row">
                  <p className="app-form-label-txt-error text-left" />
                  <Checkbox
                    key="photo"
                    id="image-accept"
                    label="image_consent"
                    text="Ok"
                    handleCheckbox={this.handleConsentsCheckbox}
                    send={send}
                    disabled
                  />

                  <p className="app-form-label-txt txt-left">
                    Sé que debo adquirir
                    <a
                      className="btn-link-auth"
                      href={Einwilligung}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>la autorización (.pdf)</strong>
                    </a>{' '}
                    de los alumnos/as que participan en el concurso en cuanto a
                    la posible publicación de sus nombres y/o fotos en la página
                    web del concurso o en revistas especializadas
                  </p>
                </div>
              </div>
              <div id="checkboxInterestWrapper" className="app-form-whole">
                <div className="mini-grid-row">
                  <div>
                    <Checkbox
                      key="interest"
                      label="course-interest"
                      text="Ok"
                      handleCheckbox={this.handleInterestCheckbox}
                      checked={interestCheckbox}
                      disabled
                    />
                  </div>
                  <p className="app-form-label-txt txt-left">
                    Tengo interés en asistir al cursillo digital preparatorio el
                    5 de diciembre de 2023, de 17.30 h a 18.30 h.
                  </p>
                </div>
              </div>
            </div>

            <Button type={'submit'} label={'Enviar'} css={'m1rem'} disabled />
          </form>
        </div>
      </article>
    );
  }
}

export default Register;
