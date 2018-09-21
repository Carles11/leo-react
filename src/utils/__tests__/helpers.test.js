import * as H from '../helpers'

describe('Helper functions', () => {
  it('should return a sanitized url', () => {
    const result = H.getSlug('just a nice test')
    expect(result).toEqual('just-a-nice-test')
  })
})
