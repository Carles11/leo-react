// import { text } from 'body-parser';
import getDictionary from './dictionary';

const DIC = getDictionary();

function handleText(item) {
  const itemArg = item;
  const isEmail = itemArg.id.type === 'email';
  const isPassword = itemArg.id.type === 'password';

  if (!itemArg.validity.valid) {
    if (itemArg.validity.valueMissing) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_REQUIRED}`;
    } else if (isEmail && itemArg.validity.typeMismatch) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_EMAIL}`;
    } else if (
      itemArg.validity.patternMismatch ||
      (isPassword && itemArg.validity.patternMismatch)
    ) {
      itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_TEXT}`;
    }
    return false;
  }

  itemArg.error.textContent = '';
  return true;
}

// No text-areas in leo

function handleTextarea(item) {
  const itemArg = item;
  if (itemArg.id.value.length < 25) {
    itemArg.id.classList.add('invalid');
    itemArg.error.textContent = `${itemArg.label} ${DIC.ERROR_TEXTAREA}`;
    return false;
  }

  itemArg.id.classList.remove('invalid');
  itemArg.id.classList.add('valid');
  itemArg.error.textContent = '';
  return true;
}

export const showCheckboxError = (item) => {
  let checkboxes,
    error = null;

  if (item.value === undefined) {
    checkboxes = Array.from(item.querySelectorAll('input[type=checkbox]'));
    error = item.querySelector('.app-form-label-txt-error');
  } else {
    checkboxes = Array.from(
      item.parentNode.parentNode.querySelectorAll('input[type=checkbox]'),
    );
    error = item.parentNode.parentNode.querySelector(
      '.app-form-label-txt-error',
    );
  }

  const basesAccept = item.value === 'bases_consent';
  const imageAccept = item.value === 'image_consent';

  // console.log(basesAccept, imageAccept);
  // console.log(item.parentNode.parentNode.parentNode);

  if ((basesAccept || imageAccept) && item.dataset.checked !== 'checked') {
    checkboxes = checkboxes.push(
      item.parentNode.parentNode.parentNode.querySelectorAll(
        'input[type=checkbox]',
      ),
    );
    console.log('CAHEKHELEKLE', checkboxes);
    error = item.parentNode.parentNode.parentNode.querySelector(
      '.app-form-label-txt-error',
    );
    error.textContent = 'Debe aceptar este campo para inscribirse.';
    return false;
  }

  // Check if at least one checkbox is checked,
  const isChecked = checkboxes.some((checkbox) => checkbox.dataset.checked);

  // Display or clear the error message based on the checked status
  if (isChecked) {
    error.textContent = '';
    return true; // Checkbox is checked, no error
  }

  error.textContent = 'Esta selección es obligatoria.';
  return false; // No checkbox is checked, display error
};

export const showInputError = (input) => {
  const item = {
    id: document.querySelector(`#${input.id}`),
    validity: document.querySelector(`#${input.id}`).validity,
    label: document.querySelector(`#${input.name}Label`).textContent,
    error: document.querySelector(`#${input.name}Error`),
  };

  switch (input.type) {
    case 'text':
    case 'email':
    case 'password':
      return handleText(item);
    case 'textarea':
      return handleTextarea(item);
    case 'checkbox':
      return true;
    default:
      return true;
  }
};

export const showFormErrors = () => {
  const inputs = document.querySelectorAll('input:required');
  const textareas = document.querySelectorAll('textarea:required');
  const checkboxParent = document.getElementById('checkboxWrapper');
  const checkboxBasesConsent = document.getElementById(
    'checkboxesBasesConsentWrapper',
  );
  const checkboxImageConsent = document.getElementById(
    'checkboxesImageConsentWrapper',
  );

  let isFormValid = true;

  // Check required inputs
  inputs.forEach((input) => {
    const isInputValid = showInputError(input);
    if (!isInputValid) isFormValid = false;
  });

  // Check required textareas
  textareas.forEach((textarea) => {
    const isTextareaValid = showInputError(textarea);
    if (!isTextareaValid) isFormValid = false;
  });

  // Check the checkboxes
  if (checkboxParent && !showCheckboxError(checkboxParent)) isFormValid = false;

  // Check if both consent checkboxes are checked

  if (checkboxBasesConsent && !showCheckboxError(checkboxBasesConsent)) {
    console.error('Please check this checkbox.');
    isFormValid = false;
  }
  if (checkboxImageConsent && !showCheckboxError(checkboxImageConsent)) {
    console.error('Please check this checkbox.');
    isFormValid = false;
  }

  return isFormValid;
};
