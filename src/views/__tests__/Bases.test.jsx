import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedBases } from '../Bases'
import getDictionary from '../../utils/dictionary'

const properties = {
  DIC: getDictionary(),
}

describe('<Bases />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedBases {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
