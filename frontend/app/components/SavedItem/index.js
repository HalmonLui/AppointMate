import React from 'react';
import PropTypes from 'prop-types';
import coolcat from './coolcat.jpg';
import star from './star.png'
import './SavedItem.css';

function SavedItem(props) {
  return (
    <div id="saveditem-container">
      <img id="storeimage" src={props.imageurl} alt="react-boilerplate - Logo"/>
      <div id="saveditem-container-right">
        <div>
            <p class="saveditem-title">
              {props.title}
            </p>
            <p class="saveditem-location">
              {props.location}
            </p>
        </div>
        <div id="rating-container">
          <div id="rating-star-container">
            <img id="starimage" src={star} alt="react-boilerplate - Logo"/>
            <p class="saveditem-rating">{props.rating}</p>
          </div>
          <p class="saveditem-num-ratings">
            {props.numratings} ratings
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
