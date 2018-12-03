import React from 'react'
import { shallow } from 'enzyme'
import AdminPanel from '../AdminPanel'

const properties = {
  auth: false,
}

describe('<AdminPanel />', () => {
  it('should render itself', () => {
    const component = shallow(<AdminPanel {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should redirect to Admin if auth is false', () => {
    const component = shallow(<AdminPanel {...properties} />)
    expect(component.find('Redirect').length).toEqual(1)
  })

  it('should render AdminList if auth is true', () => {
    properties.auth = true
    const component = shallow(<AdminPanel {...properties} />)
    expect(component.find('Redirect').length).toEqual(0)
    expect(component.find('AdminList').length).toEqual(1)
  })
})
