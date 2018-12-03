import getDicionary from '../dictionary'

describe('getDictionary funciton', () => {
  it('should return an object with dictionary entries', () => {
    const result = getDicionary()
    expect(result).toBeInstanceOf(Object)
    expect(result.CONCURSO).toEqual('El Concurso')
  })

  it('should return undefined if is passed a arg that does not exist as a key', () => {
    const result = getDicionary('no')
    expect(result).toBeUndefined()
  })
})
