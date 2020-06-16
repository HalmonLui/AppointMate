import React from 'react';
import PropTypes from 'prop-types';
import coolcat from './coolcat.jpg';
import star from './star.png'
import './SavedItem.css';

function SavedItem(props) {
  return (
    <div id="saveditem-container">
      <img id="storeimage" src={coolcat} alt="react-boilerplate - Logo"/>
      <div id="saveditem-container-right">
        <div>
            <p class="saveditem-title">
              Sally's Salon
            </p>
            <p class="saveditem-location">
              1st Street
            </p>
        </div>
        <div id="rating-container">
          <div id="rating-star-container">
            <img id="starimage" src={star} alt="react-boilerplate - Logo"/>
            <p class="saveditem-rating">4.5</p>
          </div>
          <p class="saveditem-num-ratings">
            555 ratings
          </p>
        </div>
      </div>
    </div>
  );
}

SavedItem.propTypes = {
  item: PropTypes.any,
};

export default SavedItem;
