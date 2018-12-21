import React from 'react'
import { shallow } from 'enzyme'
import getDictionary from '../../utils/dictionary'
import Landing from '../Landing'

const properties = {
  DIC: getDictionary(),
}

describe('<Landing />', () => {
  it('should render itself', () => {
    const component = shallow(<Landing {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
