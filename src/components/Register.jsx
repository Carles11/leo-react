import React from 'react'
import PropTypes from 'prop-types'

import API from '../utils/API'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import SingleInput from './form/SingleInput'
import Button from './Button'
import { isDisabled } from '../utils/helpers'

const Register = props => {
  const { DIC } = props

  const handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  const handleData = e => {
    const { elements } = e.target
    const name = elements.name.value.trim()
    const course = elements.course.value.trim()
    const phone = elements.phone.value.trim()
    const address = elements.address.value.trim()
    const contact = elements.contact.value.trim()
    const email = elements.email.value.trim()

    cleanFields(elements)

    return { name, course, phone, address, contact, email }
  }

  const handlePost = async body => {
    try {
      const promise = await API.post('schools', body)
      console.log(promise)
    } catch(err) {

    }
  }

  const cleanFields = elem => {
    Array.from(elem).forEach(el => {
      el.classList.remove('active')
      el.value = ''
    })

    disableButton()
  }

  const disableButton = () => isDisabled(document.querySelector('.btn'))
 
  return (
    <article className="app-section app-section-2 pSides05rem pb2rem">
      <div className="app-section-width">
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
              disableButton()
              handlePost(handleData(e))
            }
          }}
        >
          <SingleInput 
            name="name"
            inputType="text"
            title={DIC.FORM_SCHOOL_NAME}
            placeholder={DIC.FORM_SCHOOL_NAME}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="course"
            inputType="text"
            title={DIC.FORM_COURSE}
            placeholder={DIC.FORM_COURSE}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="phone"
            inputType="text"
            title={DIC.FORM_PHONE}
            placeholder={DIC.FORM_PHONE}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="address"
            inputType="text"
            title={DIC.FORM_ADDRESS}
            placeholder={DIC.FORM_ADDRESS}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="contact"
            inputType="text"
            title={DIC.FORM_CONTACT}
            placeholder={DIC.FORM_CONTACT}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="email"
            inputType="email"
            title={DIC.FORM_MAIL}
            placeholder={DIC.FORM_MAIL}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <Button type={'submit'} label={'Enviar'} css={'m1rem'} />
        </form>
      </div>
    </article>
  )
}

Register.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Register