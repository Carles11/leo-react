import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedColegios } from '../Colegios'
import getDictionary from '../../utils/dictionary'

const properties = {
  DIC: getDictionary(),
}

describe('<Colegios />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedColegios {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if API call fails', () => {
    const component = shallow(<UnwrappedColegios {...properties} />)
    expect(component.find('Loader').length).toEqual(1)
  })
})
