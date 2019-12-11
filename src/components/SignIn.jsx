import React from 'react'
import PropTypes from 'prop-types'
import ReactMessages from 'react-messages'

import SingleInput from './form/SingleInput'
import Button from './Button'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import { isDisabled } from '../utils/helpers'
import withScroll from './HOC/withScroll'

const SignIn = props => {
  const handleChange = e => {
    e.target.classList.add('active')
    showInputError(e.target)
  }

  const handleData = e => {
    const { elements } = e.target
    const username = elements.username.value.trim()
    const password = elements.password.value.trim()

    cleanFields(elements)

    return { username, password }
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
    <article className='app-content app-column-center m2rem'>
      <ReactMessages message={props.message} next={props.next} icon='warning' />
      <header>
        <h1 className=''>Panel de Administración</h1>
      </header>
      <form
        className='app-form app-column-center'
        noValidate
        onSubmit={e => {
          e.preventDefault()

          if (showFormErrors()) {
            disableButton()
            props.handleSubmit(handleData(e))
          }
        }}>
        <SingleInput
          name='username'
          inputType='text'
          title='Nombre de Usuario'
          placeholder='Nombre'
          pattern='.{4,}'
          controlFunc={handleChange}
        />
        <SingleInput
          name='password'
          inputType='password'
          title='Contraseña'
          placeholder='Contraseña'
          pattern='.{4,}'
          controlFunc={handleChange}
        />
        <div className='app-form-group'>
          <Button type='submit' label='Iniciar sesión' css='btn-invert' />
        </div>
      </form>
    </article>
  )
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
  next: PropTypes.bool,
  icon: PropTypes.string,
}

const SignInWithScroll = withScroll(SignIn)

export default SignInWithScroll
