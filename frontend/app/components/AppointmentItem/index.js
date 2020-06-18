import React from 'react';
import PropTypes from 'prop-types';
import quokka from './quokka.png';
import star from './star.png'
import './AppointmentItem.css';

function AppointmentItem(props) {
  var progress_percent = props.points / props.totalpoints * 100
  return (
    <div id="saveditem-container">
      <div id="appointmentitem-top-container">
          <img id="loyaltyimage" src={quokka} alt="react-boilerplate - Logo"/>
          <div id="appointmentitem-store-info">
              <p>Sally</p>
              <p>123 st</p>
              <p>111-111-1111</p>
              <p>Get directions</p>
          </div>
      </div>
      <div id="appointmentitem-bottom-container">
        <div>
          <p>Wed July 1 at 4:00PM</p>
          <p>Haircut with joemama</p>
        </div>
        <div>View details</div>
      </div>
    </div>
  );
}

AppointmentItem.propTypes = {
  item: PropTypes.any,
};

export default AppointmentItem;
