import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/ItemCarousel.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

function ItemCarousel({ cover, title, year, duration, contentRating }) {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img src={play} alt='Play' />
          <img src={plus} alt='Plus' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {year}
          {' '}
          {contentRating}
          {' '}
          {duration}
          {' '}
          min
        </p>
      </div>
    </div>
  );
}

ItemCarousel.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRating: PropTypes.string,
};

export default ItemCarousel;
