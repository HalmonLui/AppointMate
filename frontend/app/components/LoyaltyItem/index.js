import React from 'react';
import PropTypes from 'prop-types';
import quokka from './quokka.png';
import star from './star.png'
import './LoyaltyItem.css';

function LoyaltyItem(props) {
  var progress_percent = props.points / props.totalpoints * 100
  return (
    <div onClick={props.LoyaltyModal} id="saveditem-container">
      <img id="loyaltyimage" src={quokka} alt="react-boilerplate - Logo"/>
      <div id="loyalty-container-right">
        <div>
            <p class="loyalty-title">
              {props.title}
            </p>
            <p class="loyalty-points">
              {props.points} points
            </p>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" style={{width: progress_percent + '%'}}></div>
        </div>
        <div id="points-container">
          <p class="points-text"><span class="green-points-text">{props.totalpoints - props.points} more points </span>until your next reward!</p>
        </div>
      </div>
    </div>
  );
}

LoyaltyItem.propTypes = {
  item: PropTypes.any,
};

export default LoyaltyItem;
