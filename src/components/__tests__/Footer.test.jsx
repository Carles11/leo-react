import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'
import getDictionary from '../../utils/dictionary'
import { FOOTER_DATA } from '../../utils/constants'

const properties = {
  DIC: getDictionary(),
  FOOTER_DATA,
}

describe('<Footer />', () => {
  it('should render itself', () => {
    const component = shallow(<Footer {...properties} />)
    expect(component).toMatchSnapshot()
  })
})
