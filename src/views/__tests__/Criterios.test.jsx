import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedCriterios } from '../Criterios'
import getDictiorary from '../../utils/dictionary'

const properties = {
  DIC: getDictiorary(),
}

describe('<Criterios />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedCriterios {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
