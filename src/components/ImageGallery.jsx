import React from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';

import * as API from '../utils/API';
import Filter from './Filter';
import withWindow from './HOC/withWindow';
import Loader from './Loader';

class ImageGallery extends React.Component {
  state = {
    loaded: false,
    currentImage: 0,
    lightboxIsOpen: false,
    data: [],
    photos: [],
    year: 2024,
    filter: {},
    position: 0,
    lazyLoad: false,
  };

  componentDidUpdate(prevState) {
    const { position, lazyLoad, year } = this.state;
    // const newDate = new Date();
    // const currentYear = newDate.getFullYear();
    // this.getPhotos(currentYear - 3); //keep it in case we get photos to show currentYear
    if (position !== prevState.position && !lazyLoad) {
      this.setState((oldState) => ({ lazyLoad: !oldState.lazyLoad }));
      this.getPhotos(year); // we show 2023 by default
    }
  }

  handleFilter = (e) => {
    const { data } = this.state;
    const { year } = e.target.dataset;
    const photos = data.filter((photo) => photo.year === Number(year));

    this.setState({ photos, year });
  };

  getPhotos = async (year) => {
    const promise = await API.get(`images`);

    const promiseData = promise.data ? promise.data : null;

    const onlyPhotosOver2019 =
      promiseData && promiseData.filter((photo) => photo.year >= 2019);
    if (onlyPhotosOver2019 !== null) {
      let data =
        onlyPhotosOver2019 && onlyPhotosOver2019.sort((a, b) => a._id > b._id);

      this.setState({
        data,
        photos: onlyPhotosOver2019.filter(
          (photo) => photo.year === Number(year),
        ),
        loaded: true,
      });

      this.getYears(onlyPhotosOver2019);
    } else {
      return;
    }
  };

  getYears = (years) => {
    const filter = years.reduce((acc, val) => {
      if (!acc[val.year]) acc[val.year] = 0;
      acc[val.year]++;
      return acc;
    }, {});

    this.setState({ filter });
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage - 1,
    });
  };

  gotoNext = () => {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage + 1,
    });
  };

  render() {
    const { loaded, photos, filter, year } = this.state;
    if (!loaded) return <Loader css={'app-section h725'} />;
    console.log({ photos });
    return (
      <React.Fragment>
        <header className="header-wrapper">
          <h2 className="tit-section m2rem tit-section-secondColor">
            Galería de imágenes {year}
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
    );
  }
}

const ImageGalleryWithWindow = withWindow(ImageGallery);

export const Unwrapped = ImageGallery;
export default ImageGalleryWithWindow;
