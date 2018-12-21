import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Admin from '../Admin'

const properties = {
  auth: false,
  checkAuth: jest.fn(),
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <Admin {...props} />
    </MemoryRouter>,
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('<Admin />', () => {
  it('should render itself', () => {
    const component = shallow(<Admin {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render SignIn Component if auth is false', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('SignIn').length).toEqual(1)
  })

  it('should call checkAuth prop method', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('SignIn').length).toEqual(1)
  })

  it('should redirect to admin-panel if auth is true', () => {
    properties.auth = true
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('SignIn').length).toEqual(0)
    expect(enzymeWrapper.find('Redirect').length).toEqual(1)
  })
})
