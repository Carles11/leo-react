import getDictionary from './dictionary'

const DIC = getDictionary()

function handleText(item) {
  const itemArg = item
  const isEmail = itemArg.id.type === 'email'
  const isPassword = itemArg.id.type === 'password'

  if (!itemArg.validity.valid) {
    if (itemArg.validity.valueMissing) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_REQUIRED}`
    } else if (isEmail && itemArg.validity.typeMismatch) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_EMAIL}`
    } else if (
      itemArg.validity.patternMismatch
			|| (isPassword && itemArg.validity.patternMismatch) // eslint-disable-line no-tabs
    ) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_TEXT}`
    }
    return false
  }

  itemArg.error.textContent = ''
  return true
}

function handleTextarea(item) {
  const itemArg = item
  if (itemArg.id.value.length < 25) {
    itemArg.id.classList.add('invalid')
    itemArg.error.textContent = `${itemArg.label} should be longer than 25 chars`
    return false
  }

  itemArg.id.classList.remove('invalid')
  itemArg.id.classList.add('valid')
  itemArg.error.textContent = ''
  return true
}

export const showInputError = (input) => {
  const item = {
    id: document.querySelector(`#${input.id}`),
    validity: document.querySelector(`#${input.id}`).validity,
    label: document.querySelector(`#${input.name}Label`).textContent,
    error: document.querySelector(`#${input.name}Error`),
  }

  switch (input.type) {
    case 'text':
    case 'email':
    case 'password':
      return handleText(item)
    case 'textarea':
      return handleTextarea(item)
    default:
      return true
  }
}

export const showFormErrors = () => {
  const inputs = document.querySelectorAll('input:required')
  const textareas = document.querySelectorAll('textarea:required')
  let isFormValid = true

  inputs.forEach((input) => {
    const isInputValid = showInputError(input)
    if (!isInputValid) isFormValid = false
  })

  textareas.forEach((textarea) => {
    const isTextareaValid = showInputError(textarea)
    if (!isTextareaValid) isFormValid = false
  })

  return isFormValid
}
