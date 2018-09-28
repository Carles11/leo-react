import * as H from '../helpers'

describe('Helper functions', () => {
  it('should return a sanitized url', () => {
    const result = H.getSlug('just a nice test')
    expect(result).toEqual('just-a-nice-test')
  })

  it('should remove attr if it does not exist and return false', () => {
    /* eslint-disable */
		const button = document.createElement('button')
		button.setAttribute('disabled', '')
		const result = H.isDisabled(button)
		expect(result).toBeFalsy()
	})

	it('should add attr if it does not exist and return true', () => {
		const button = document.createElement('button')
		const result = H.isDisabled(button)
		expect(result).toBeTruthy()
		/* eslint-enable */
  })
})
