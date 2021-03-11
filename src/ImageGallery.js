import React, { useState, useEffect } from 'react';

import { StyledImageGallery } from './ImageGallery.styled';

import { RemoveScroll } from 'react-remove-scroll';

import arrowLeft from './assets/arrow-left.svg';
import arrowRight from './assets/arrow-right.svg';
import iconX from './assets/icon-x.svg';

const ImageGallery = ({ images, mediaQueries }) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageToShow, setImageToShow] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    setCurrentIndex(images.findIndex((i) => i.src === imageToShow));
  }, [imageToShow, images]);

  const imageThumbnails = images.map((image) => (
    <img
      key={`${image.src}`}
      className='image-card'
      onClick={() => {
        openLightbox();
        imageToShowHandler(image.src);
      }}
      onKeyDown={() => {
        openLightbox();
        imageToShowHandler(image.src);
      }}
      src={image.src}
      alt={image.alt}
      loading='lazy'
    />
  ));

  const imageToShowHandler = (imageSrc) => setImageToShow(imageSrc);

  const openLightbox = () => setIsLightboxOpen(true);

  const closeLightbox = () => setIsLightboxOpen(false);

  const showNextImage = (event) => {
    event.stopPropagation();
    if (currentIndex >= images.length - 1) {
      setImageToShow(images[0].src);
    } else {
      setImageToShow(images[currentIndex + 1].src);
    }
  };

  const showPrevImage = (event) => {
    event.stopPropagation();
    if (currentIndex <= 0) {
      setImageToShow(images[images.length - 1].src);
    } else {
      setImageToShow(images[currentIndex - 1].src);
    }
  };

  return (
    <StyledImageGallery
      scrollbarWidth={scrollbarWidth}
      mediaQueries={mediaQueries}
    >
      <div className='image-grid'>{imageThumbnails}</div>

      {isLightboxOpen && (
        <RemoveScroll>
          <div
            className={`lightbox ${RemoveScroll.classNames.fullWidth}`}
            onClick={closeLightbox}
            onKeyDown={closeLightbox}
          >
            <div className='gallery-wrapper'>
              <button onClick={showPrevImage}>
                <img src={arrowLeft} alt='arrow left' />
              </button>
              <img className='lightbox-img' src={imageToShow} />
              <button onClick={showNextImage}>
                <img src={arrowRight} alt='arrow right' />
              </button>
              <button onClick={closeLightbox}>
                <img src={iconX} alt='icon close' />
              </button>
            </div>
          </div>
        </RemoveScroll>
      )}
    </StyledImageGallery>
  );
};

export default ImageGallery;
