import React from 'react'
import PropTypes from 'prop-types'

import SingleInput from './form/SingleInput'
import Button from './Button'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import { isDisabled } from '../utils/helpers'

const SignIn = props => {

  const handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  const handleData = e => {
    const { elements } = e.target
    const username = elements.username.value.trim()
    const password = elements.password.value.trim() 

    //cleanFields(elements)

    return { username, password }
  }

  const cleanFields = elem => {
    Array.from(elem).forEach(el => {
      el.classList.remove('active')
      el.value = ''
    })

    disableButton()
  }

  const disableButton = () => {
    const btn = document.querySelector('.btn')
    isDisabled(btn)
  }

  return (
    <article className="app-content app-column-center">
      <header>
        <h1 className="">Panel de Administración</h1>
      </header>
      <form
        className="app-form app-column-center"
        noValidate
        onSubmit={
          e => {
            e.preventDefault()

            if (showFormErrors()) {
              disableButton()
              props.handleSubmit(handleData(e))
            }
          }
        }
      >
        <SingleInput 
          name="username"
          inputType="text"
          title="Nombre de Usuario"
          placeholder="Nombre"
          pattern=".{4,}"
          controlFunc={handleChange}
        />
        <SingleInput 
          name="password"
          inputType="password"
          title="Contraseña"
          placeholder="Contraseña"
          pattern=".{4,}"
          controlFunc={handleChange}
        />
        <div className="app-form-group">
          <Button type={'submit'} label={'Iniciar sesión'} css={'btn-invert'} />
        </div>
      </form>
    </article>
  )
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignIn