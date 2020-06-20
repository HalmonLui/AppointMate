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
import Modal from 'react-modal';
import quokka from './quokka.png';
// These imports giving errors
import calendarImg from './calendar.png';
import locationImg from './location.png';
import phoneImg from './phone.png';

class AppointmentsPage extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
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
            address="22 Bakery Avenue"
            phone="617-617-6176"
            day="Sat"
            date="January 1st"
            time="11:00 AM"
            activity="Haircut with Barbara's Son"
            AppointmentModal={this.handleOpenModal}
          />
        <Modal isOpen={this.state.showModal}>
        <div class="container">
        </div>
        <div class="bg">
        </div>
        <button onClick={this.handleCloseModal}>x</button>
          <div class="center">
            <h2>Spa Center</h2>
            <img id="store-image" src={quokka}/>
            <img id="store-images" src={locationImg}/>
            <img id="store-images" src={phoneImg}/>
            <img id="store-images" src={calendarImg}/>
          </div>
        </Modal>
        <Footer activepage="appointments"/>
      </div>
    );
  }
}
export default AppointmentsPage
