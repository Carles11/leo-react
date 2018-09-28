import React from 'react'
import { shallow } from 'enzyme'
import Contest from '../Contest'
import { PARAGRAPHS } from '../../utils/constants'
import getDictionary from '../../utils/dictionary'

const properties = {
  PARAGRAPHS,
  DIC: getDictionary(),
}

describe('<Contest />', () => {
  it('should render itself', () => {
    const component = shallow(<Contest {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
