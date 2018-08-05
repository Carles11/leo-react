import React from 'react'
import PropTypes from 'prop-types'

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

    return { name, course }
  }

  const handlePost = (data) => {

  }
 
  return (
    <article className="app-section app-section-2">
      <div className="app-content">
        <h2>Formulario de Inscripción</h2>
        <h3>Registra tu escuela</h3>
        <form onSubmit={ e => {
          e.preventDefault()
          if (showFormErrors()) {
            handlePost(handleData(e))
          }
        }}>
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