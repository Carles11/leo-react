import React from 'react'
import PropTypes from 'prop-types'

import API from '../utils/API'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import Background from './Background'
import SingleInput from './form/SingleInput'
import Button from './Button'
import bg from '../assets/imgs/bg2.jpg'

const Register = props => {
  const { DIC } = props

  const handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  const handleData = e => {
    const name = e.target.elements.name.value
    const course = e.target.elements.course.value
    const phone = e.target.elements.phone.value
    const address = e.target.elements.address.value
    const contact = e.target.elements.contact.value
    const email = e.target.elements.email.value  

    return { name, course, phone, address, contact, email }
  }

  const handlePost = async body => {
    if (Object.keys(body).length) {
      const promise = await API.post('schools', body)
      console.log(promise)
    }
  }
 
  return (
    <article className="app-section app-section-2">
      <div className="app-section-width">
        <header className="header-wrapper" >
          <h2 className="tit-section">Formulario de Inscripción</h2>
          <h3 className="subtit-section">Registra tu escuela</h3>
        </header>
        <form
          className="app-form"
          noValidate 
          onSubmit={ e => {
            e.preventDefault()

            if (showFormErrors()) {
              handlePost(handleData(e))
            }
          }}
        >
          <SingleInput 
            name="name"
            inputType="text"
            title={DIC.FORM_SCHOOL_NAME}
            placeholder={'Escuela pública...'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="course"
            inputType="text"
            title={DIC.FORM_COURSE}
            placeholder={'Segundo grado'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="phone"
            inputType="text"
            title={DIC.FORM_PHONE}
            placeholder={'436 659 963'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="address"
            inputType="text"
            title={DIC.FORM_ADDRESS}
            placeholder={'Main Strasse...'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="contact"
            inputType="text"
            title={DIC.FORM_CONTACT}
            placeholder={'Pedro Gimenez'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <SingleInput 
            name="email"
            inputType="email"
            title={DIC.FORM_MAIL}
            placeholder={'example@gmail.com'}
            pattern=".{6,}"
            controlFunc={handleChange}
          />
          <Button type={'submit'} label={'Enviar'} />
        </form>
      </div>
      <Background 
        url={bg} 
        label={DIC.NAV_INSCRIPCION} 
      />
    </article>
  )
}

Register.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Register