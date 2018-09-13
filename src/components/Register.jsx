import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'

import * as API from '../utils/API'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import SingleInput from './form/SingleInput'
import Checkbox from './form/Checkbox'
import Button from './Button'
import { isDisabled } from '../utils/helpers'

const categories = ['A1', 'A2', 'B1', 'B2']

class Register extends React.Component {
  state = {
    send: false,
    error: false,
    message: '',
    category: []
  }

  static propTypes = {
    DIC: PropTypes.object.isRequired,
  }

  handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  handleCheckbox = e => {
    const { category } = this.state
    const { value } = e.target

    if (category.indexOf(value) === -1) {
      category.push(value)
    } else {
      category.splice(category.indexOf(value), 1)
    }
  }

  handleData = e => {
    const { category } = this.state
    const { elements } = e.target
    const name = elements.name.value.trim()
    const course = elements.course.value.trim()
    const phone = elements.phone.value.trim()
    const address = elements.address.value.trim()
    const contact = elements.contact.value.trim()
    const email = elements.email.value.trim()

    this.cleanFields(elements)

    return { name, course, phone, address, contact, email, category }
  }

  handlePost = async body => {
    const promise = await API.post('schools', body)

    if (promise.success) {
      this.setState(prevState => ({ 
        send: !prevState.send,
        message: 'Gracias por participar en el concurso de lectura Leo, leo.',
        error: false
      }))
    } else {
      this.setState(prevState => ({ 
        send: !prevState.send,
        message: 'Lamentablemente no se pudo enviar el formulario, inténtelo más tarde.',
        error: true
      }))
    }
      
  }

  cleanFields = elem => {
    Array.from(elem).forEach(el => {
      el.classList.remove('active')
      el.value = ''
    })

    const checkboxes = Array.from(document.querySelectorAll('.app-form-whole input[type=checkbox]'))
    checkboxes.forEach(item => item.checked = false)

    this.disableButton()
  }

  disableButton = () => isDisabled(document.querySelector('.btn'))
 
  render() {
    const { DIC } = this.props
    const { message, send, error } = this.state

    return (
      <article className="app-section app-section-2 pSides05rem pb2rem">
        <div className="app-section-width">
          <ReactMessages message={message} next={send} duration={5000} error={error} />
          <header className="header-wrapper" >
            <h2 className="tit-section pSides05rem">Formulario de Inscripción</h2>
            <h3 className="subtit-section">Registra tu escuela</h3>
          </header>
          <form
            className="app-form"
            noValidate 
            onSubmit={ e => {
              e.preventDefault()

              if (showFormErrors()) {
                this.disableButton()
                this.handlePost(this.handleData(e))
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
            />
            <SingleInput 
              name="course"
              inputType="text"
              title={DIC.FORM_COURSE}
              placeholder={DIC.FORM_COURSE}
              pattern=".{6,}"
              controlFunc={this.handleChange}
            />
            <SingleInput 
              name="phone"
              inputType="text"
              title={DIC.FORM_PHONE}
              placeholder={DIC.FORM_PHONE}
              pattern=".{6,}"
              controlFunc={this.handleChange}
            />
            <SingleInput 
              name="address"
              inputType="text"
              title={DIC.FORM_ADDRESS}
              placeholder={DIC.FORM_ADDRESS}
              pattern=".{6,}"
              controlFunc={this.handleChange}
            />
            <SingleInput 
              name="contact"
              inputType="text"
              title={DIC.FORM_CONTACT}
              placeholder={DIC.FORM_CONTACT}
              pattern=".{6,}"
              controlFunc={this.handleChange}
            />
            <SingleInput 
              name="email"
              inputType="email"
              title={DIC.FORM_MAIL}
              placeholder={DIC.FORM_MAIL}
              pattern=".{6,}"
              controlFunc={this.handleChange}
            />
            <div className="app-form-whole">
              <p className="app-form-label-txt">Selecciona las Categorias del Concurso en las que participará la escuela:</p>
              {categories.map(item => 
                <Checkbox 
                  key={item} 
                  label={item} 
                  handleCheckbox={this.handleCheckbox} 
                  send={send}/>
              )}
            </div>
            <Button type={'submit'} label={'Enviar'} css={'m1rem'} />
          </form>
        </div>
      </article>
    )
  }
}

Register.propTypes = {
  DIC: PropTypes.object.isRequired
}

export default Register