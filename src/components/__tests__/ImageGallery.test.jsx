import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedImageGallery } from '../ImageGallery'

function setup() {
  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedImageGallery />
    </MemoryRouter>,
  )

  return { enzymeWrapper }
}

describe('<ImageGallery />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedImageGallery />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if there are no data', () => {
    const component = shallow(<UnwrappedImageGallery />)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should call componentDidUpdate when scroll position change', () => {
    const component = shallow(<UnwrappedImageGallery />)
    expect(component.find('Loader').length).toEqual(1)
    component.setState({ position: 100 })
    expect(component.state('lazyLoad')).toEqual(true)
  })
})
