export const getSlug = text => text
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')

export const isDisabled = (el) => {
  if (el.hasAttribute('disabled')) {
    el.removeAttribute('disabled')
  } else {
    el.setAttribute('disabled', '')
  }
}
