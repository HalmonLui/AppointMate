/*
 * AppointmentsPage
 *
 * List all the appointments
 */
import React from 'react';
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

export default function AppointmentsPage() {
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
        <AppointmentItem />
        <AppointmentItem />
      <div>

      </div>

      <Footer/>
    </div>
  );
}
