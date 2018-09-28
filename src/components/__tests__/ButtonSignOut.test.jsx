import React from 'react'
import { shallow } from 'enzyme'
import ButtonSignOut from '../ButtonSignOut'

const properties = {
  handleClick: jest.fn(),
}

describe('<ButtonSignOut />', () => {
  it('should render itself', () => {
    const component = shallow(<ButtonSignOut {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
