import React from 'react'
import PropTypes from 'prop-types'

import SingleInput from './form/SingleInput'
import Button from './Button'
import { showFormErrors, showInputError } from '../utils/errorHandler'

const SignIn = props => {

  const handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  const handleData = e => {
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value 

    return { username, password }
  }

  return (
    <article>
      <header>
        <h1>Panel de Administración</h1>
      </header>
      <form
        className="app-form"
        noValidate
        onSubmit={
          e => {
            e.preventDefault()

            if (showFormErrors()) {
              props.handleSubmit(handleData(e))
            }
          }
        }
      >
        <SingleInput 
          name="username"
          inputType="text"
          title="Nombre de Usuario"
          placeHolder="Juan"
          pattern=".{4,}"
          controlFunc={handleChange}
        />
        <SingleInput 
          name="password"
          inputType="password"
          title="Contraseña"
          placeHolder="*******"
          pattern=".{4,}"
          controlFunc={handleChange}
        />
        <Button type={'submit'} label={'Enviar'} />
      </form>
    </article>
  )
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignIn