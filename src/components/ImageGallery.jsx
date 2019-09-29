import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import Loader from './Loader'
import Filter from './Filter'
import * as API from '../utils/API'
import withWindow from './HOC/withWindow'

class ImageGallery extends React.Component {
  state = {
    loaded: false,
    currentImage: 0,
    lightboxIsOpen: false,
    data: [],
    photos: [],
    filter: {},
    position: 0,
    lazyLoad: false,
  }

  componentDidUpdate(prevState) {
    const { position, lazyLoad } = this.state

    if (position !== prevState.position && !lazyLoad) {
      this.setState(oldState => ({ lazyLoad: !oldState.lazyLoad }))
      this.getPhotos(2018)
    }
  }

  handleFilter = e => {
    const { data } = this.state
    const { year } = e.target.dataset
    const photos = data.filter(photo => photo.year === Number(year))

    this.setState({ photos })
  }

  getPhotos = async year => {
    const promise = await API.get(`images`)
    const data = promise.data.sort((a, b) => a._id > b._id)

    this.setState({
      data,
      photos: promise.data.filter(photo => photo.year === Number(year)),
      loaded: true,
    })

    this.getYears(promise.data)
  }

  getYears = years => {
    const filter = years.reduce((acc, val) => {
      if (!acc[val.year]) acc[val.year] = 0
      acc[val.year]++
      return acc
    }, {})

    this.setState({ filter })
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious = () => {
    const { currentImage } = this.state

    this.setState({
      currentImage: currentImage - 1,
    })
  }

  gotoNext = () => {
    const { currentImage } = this.state

    this.setState({
      currentImage: currentImage + 1,
    })
  }

  render() {
    const { loaded, photos, filter } = this.state

    if (!loaded) return <Loader css={'app-section h725'} />

    return (
      <React.Fragment>
        <header className='header-wrapper'>
          <h2 className='tit-section m2rem tit-section-secondColor'>
            Galeria de Imágenes
          </h2>
        </header>

        <Filter handleFilter={this.handleFilter} filter={filter} />
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </React.Fragment>
    )
  }
}

const ImageGalleryWithWindow = withWindow(ImageGallery)

export const Unwrapped = ImageGallery
export default ImageGalleryWithWindow
