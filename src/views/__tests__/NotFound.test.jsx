import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'
import getDictionary from '../../utils/dictionary'

const properties = {
  DIC: getDictionary(),
}

describe('<NotFound />', () => {
  it('should render itself', () => {
    const component = shallow(<NotFound {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
