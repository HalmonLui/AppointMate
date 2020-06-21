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
        <div class="modal-top-container">
          <div class="center">
              <h2>Spa Center</h2>
              <img id="store-image" src={quokka}/>
          </div>
            <div id="store-icons-align">
              <img id="store-icons" src={calendarImg}/>
            </div>
            <div id="store-icons-align">
                <h4 id="line-height-zero">Jul 21, 2020</h4>
                <p id="line-height-zero-muted">1:00 pm - 2:30 pm</p>
            </div> 
            <div class="row" >
              <div class="column">
                <img id="store-icons" src={locationImg}/> 
                <p id="line-height-zero-muted"> 87-11 10th Street</p>
              </div>
              <div class="column">
                <img id="store-icons" src={phoneImg}/>
                <p id="line-height-zero-muted">718-222-3333</p>
              </div>
            </div>
            <p id="line-height-zero"><b>Status: </b>Pay in Store</p>
          </div>
          <div class='card'>
          <p><b>Summary</b></p>
            <div class="summary-container">
              <div class="summary-left-align">
                <h4 id="summary-container-text">Sweedish Massage</h4>
                <p id="summary-container-text-green">with Bob</p>
                <p id="summary-container-text">Duration: 1hr</p>
              </div>
              <div class="summary-right-align">
                <h4 id="summary-container-text">$75</h4>
              </div>
            </div>
            <div class="summary-container">
              <div class="summary-left-align">
                <h4 id="summary-container-text">Deep Tissue Massage</h4>
                <p id="summary-container-text-green">with Sasha</p>
                <p id="summary-container-text">Duration: 30 mins</p>
              </div>
              <div class="summary-right-align">
                <h4 id="summary-container-text">$40</h4>
              </div>
            </div>
            <div class="summary-container">
              <h4 id="summary-container-text">Total: $115</h4>
            </div>
            <button class="modify-button">Modify</button>
          </div>
        </Modal>
        <Footer activepage="appointments"/>
      </div>
    );
  }
}
export default AppointmentsPage
