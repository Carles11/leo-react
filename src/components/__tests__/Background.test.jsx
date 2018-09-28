import React from 'react'
import { shallow } from 'enzyme'
import Background from '../Background'

jest.useFakeTimers()

const properties = {
  url: '/test',
}

describe('<Background />', () => {
  it('should render itself', () => {
    const component = shallow(<Background {...properties} />)
    expect(component).toMatchSnapshot()
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })
})
