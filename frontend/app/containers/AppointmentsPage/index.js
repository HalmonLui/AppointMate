/*
 * AppointmentsPage
 *
 * List all the appointments
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import AppointmentItem from 'components/AppointmentItem';
import Bellicon from './appointmentpage.png';
import './AppointmentsPage.css'
import '../LoyaltyPage/LoyaltyPage.css'
import Modal from 'react-modal';
import quokka from './quokka.png';
import calendarImg from './calendar.png';
import locationImg from './location.png';
import phoneImg from './phone.png';

class AppointmentsPage extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      activeImageUrl: '',
      activeTitle: '',
      activePoints: '',
      activeTotalPoints: ''
    };
  }
  handleOpenModal = (title, imageurl, date, time, address, phone) => {
    this.setState({
      showModal: true,
      activeTitle: title,
      activeImageUrl: imageurl,
      activeDate: date,
      activeTime: time,
      activeAddress: address,
      activePhone: phone
    });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div id="appointmentspage">
        <Helmet>
          <title>Appointments Page</title>
          <meta
            name="description"
            content="Appointment page stuff"
          />
        </Helmet>
        <div id="top-save-container">
          <div id="bellicon-container">
            <img id="bellicon" src={Bellicon} alt="bell icon" />
          </div>
          <div id="toggleswitch">
            <Link id="toggle-active" to="/appointments">
              <p>Appointments</p>
            </Link>
            <Link id="toggle-inactive" to="/loyalty">
              <p>Loyalty Programs</p>
            </Link>
          </div>
          <p id="loyalty-text">Never miss an appointment by turning notifications on!</p>
          <h2 id="loyalty-title">Upcoming Appointments</h2>
        </div>
          <AppointmentItem
            title="Sally's Salon"
            imageurl="https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg"
            address="123 Beacon Street"
            phone="617-617-6176"
            day="Fri"
            date="July 7th"
            time="4:00 PM"
            activity="Haircut with Sally"
            AppointmentModal={this.handleOpenModal}
          />
          <AppointmentItem
            title="Nancy's Salon"
            imageurl="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            address="2 Washington Street"
            phone="617-617-6176"
            day="Tue"
            date="July 13th"
            time="2:40 PM"
            activity="Gel your nails"
            AppointmentModal={this.handleOpenModal}
          />
          <AppointmentItem
            title="Barbara's Barber Shop"
            imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwOTrW1_BwLDStRVfYdQIVkNfT0nq6A_RPXA&usqp=CAU"
            address="22 Bakery Avenue"
            phone="617-617-6176"
            day="Sat"
            date="January 1st"
            time="11:00 AM"
            activity="Haircut with Barbara's Son"
            AppointmentModal={this.handleOpenModal}
          />
        <Modal isOpen={this.state.showModal}>
        <div class="modal-green-background">
        </div>
        <button id="close-modal-button" onClick={this.handleCloseModal}>&times;</button>
        <div class="modal-top-container">
          <div class="center">
              <h2 id="modal-title">{this.state.activeTitle}</h2>
              <img id="modal-store-image" src={this.state.activeImageUrl}/>
          </div>
            <div id="store-icons-align">
              <img id="store-icons" src={calendarImg}/>
              <div>
                <h4 id="line-height-zero">{this.state.activeDate}</h4>
                <p id="line-height-zero-muted">{this.state.activeTime}</p>
              </div>
            </div>
            <div class="modal-row-container" >
              <div class="modal-column-container">
                <img id="store-icons" src={locationImg}/>
                <p id="line-height-zero-muted">{this.state.activeAddress}</p>
              </div>
              <div class="modal-column-container">
                <img id="store-icons" src={phoneImg}/>
                <p id="line-height-zero-muted">{this.state.activePhone}</p>
              </div>
            </div>
            <p id="line-height-zero"><b>Status: </b>Pay in Store</p>
          </div>
          <div class='modal-appointment-card'>
            <h3 id="modal-summary">Summary</h3>
            <div id="modal-summary-text-container">
              <div id="modal-summary-title-container">
                <h4 id="modal-summary-title">Men's Haircut</h4>
                <h4 id="modal-summary-price">$75</h4>
              </div>
              <p id="modal-with">with Sasha</p>
              <p id="modal-duration">Duration: 30 mins</p>
            </div>
            <div id="modal-total-container">
              <h4 id="modal-total">Total:</h4>
              <h4 id="modal-total-price">$75</h4>
            </div>
          </div>
          <button class="modify-button">Modify</button>
        </Modal>
        <Footer activepage="appointments"/>
      </div>
    );
  }
}
export default AppointmentsPage
