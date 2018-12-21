import React from 'react'
import { shallow } from 'enzyme'
import getDictionary from '../../utils/dictionary'
import { Unwrapped as UnwrappedLectura } from '../Lectura'

const properties = {
  DIC: getDictionary(),
}

describe('<Landing />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedLectura {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
