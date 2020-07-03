import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/ItemCarousel.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import { setFavorite, deleteFavorite } from '../actions';

function ItemCarousel(props) {
  const { id, cover, title, year, duration, contentRating, isList } = props;

  const handleFavorite = () => {
    props.setFavorite({
      id, cover, title, year, duration, contentRating,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img src={play} alt='Play' onClick={() => handleDeleteFavorite(id)} />
          {!isList && (
            <img src={plus} alt='Plus' onClick={handleFavorite} />
          )}
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(ItemCarousel);
