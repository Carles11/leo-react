import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import Loader from './Loader'
import Filter from './Filter'
import * as API from '../utils/API'

class ImageGallery extends React.Component {
	state = {
		loaded: false,
		currentImage: 0,
		lightboxIsOpen: false,
		photos: [],
		filter: {},
	}

	componentDidMount() {
		this.getPhotos()
	}

	handleFilter = e => {
		this.getPhotos(e.target.dataset.year)
		this.setState({ loaded: false, photos: [] })
	}

	getPhotos = async year => {
		const { filter } = this.state
		const param = year ? `year/${Number(year)}` : ''
		const promise = await API.get(`images/${param}`)

		if (promise.success) {
			await this.setState({ photos: promise.data, loaded: true })
		}

		if (Object.keys(filter).length === 0) this.getYears()
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

		if (!loaded) return <Loader css={'app-section h725'} />

		return (
			<React.Fragment>
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

export default ImageGallery
