import React from 'react'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery';

import Loader from './Loader'
import Filter from './Filter'

class Galeria extends React.Component {
  state = { 
    loaded: false,
    currentImage: 0,
    lightboxIsOpen: false,
    photos: [],
    filter: {}
  }

  componentDidMount() {
    this.getPhotos()
  }

  handleFilter = e => {
    this.getPhotos(e.target.dataset.year)
    this.setState({ loaded: false, photos: [] })
  }

  getPhotos = async (year) => {
    try {
      const { filter } = this.state
      const url = year ? `/year/${Number(year)}` : ''
      const promise = await fetch(`http://localhost:5001/api/images${url}`, { method: 'GET' })
      
      this.setState({
        photos: await promise.json(),
        loaded: true
      })

      if (Object.keys(filter).length === 0) this.getYears()

    } catch (err) {
      console.log(err)
    }
  }

  getYears = () => {
    const { photos } = this.state

    const filter = photos.reduce((acc, val) => {
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

    if (!loaded) return <Loader css={'app-section app-section-1'} />

    return (
      <article className="app-section app-section-1">
        <Filter 
          handleFilter={this.handleFilter}
          filter={filter}
        />
        <Gallery 
          photos={photos} 
          onClick={this.openLightbox} 
        />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </article>
    )
  }
}

export default Galeria