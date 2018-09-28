import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Filter from '../Filter'

const properties = {
  filter: {
    2018: 1,
  },
  handleFilter: jest.fn(),
}

function setup() {
  const props = properties
  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <Filter {...props} />
    </MemoryRouter>,
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('<Filter />', () => {
  it('should render itself', () => {
    const component = shallow(<Filter {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should call the handleFilter prop method', () => {
    const { enzymeWrapper, props } = setup()
    const mockedEvent = { test: true }
    enzymeWrapper.find('#btn_visibility').simulate('click')
    expect(props.handleFilter.mock.calls.length).toEqual(0)
    enzymeWrapper.find('#btn_2018').simulate('click')
    expect(props.handleFilter.mock.calls.length).toEqual(1)
  })

  it('should render all the filter items', () => {
    properties.filter[2019] = 2
    const { enzymeWrapper, props } = setup()
    expect(enzymeWrapper.find('.app-filter-item button').length).toEqual(3)
  })
})
