import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

const properties = {
  label: 'button test',
  link: '/test',
}

describe('<Button />', () => {
  it('should render itself', () => {
    const component = shallow(<Button {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render a button', () => {
    const component = shallow(<Button {...properties} />)
    expect(component.find('.btn').length).toEqual(1)
    expect(component.find('.btn').prop('type')).toEqual('button')
  })

  it('should render a Link', () => {
    properties.external = false
    const component = shallow(<Button {...properties} />)
    expect(component.find('.btn').length).toEqual(0)
    expect(component.find('Link').length).toEqual(1)
  })

  it('should render an anchor', () => {
    properties.external = true
    const component = shallow(<Button {...properties} />)
    expect(component.find('.btn').length).toEqual(0)
    expect(component.find('Link').length).toEqual(0)
    expect(component.find('a').length).toEqual(1)
  })

  it('should add the css passed as props', () => {
    properties.css = 'test'
    const component = shallow(<Button {...properties} />)
    expect(component.find('.test').length).toEqual(1)
  })
})
