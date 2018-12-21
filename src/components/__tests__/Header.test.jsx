import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'
import getDictionary from '../../utils/dictionary'

const properties = {
  DIC: getDictionary(),
}

describe('<Header />', () => {
  it('should render itself', () => {
    const component = shallow(<Header {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
