import React from 'react'
import { shallow } from 'enzyme'
import AdminList from '../AdminList'

const properties = {
  type: 'test',
}

describe('<AdminList />', () => {
  xit('should render itself', () => {
    const component = shallow(<AdminList {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
