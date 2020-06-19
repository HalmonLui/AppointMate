/*
 * LoyaltyPage
 *
 * List all the loyalties
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
import LoyaltyItem from 'components/LoyaltyItem';
import Bellicon from './appointmentpage.png';
import './LoyaltyPage.css'

export default function LoyaltyPage() {
  return (
    <div id="loyaltypage">
      <Helmet>
        <title>Loyalty Page</title>
        <meta
          name="description"
          content="Loyalty page stuff"
        />
      </Helmet>
      <div id="top-save-container">
        <div id="bellicon-container">
          <img id="bellicon" src={Bellicon} alt="bell icon" />
        </div>
        <div id="toggleswitch">
          <Link id="toggle-inactive" to="/appointments">
            <p>Appointments</p>
          </Link>
          <Link id="toggle-active" to="/loyalty">
            <p>Loyalty Programs</p>
          </Link>
        </div>
        <p id="loyalty-text">Rack up loyalty points with your favorite places to redeem rewards!</p>
        <h2 id="loyalty-title">Active Loyalty Programs</h2>
      </div>

      <div>
        <LoyaltyItem
          title='Sallys Salon'
          totalpoints='20'
          points='5'
        />
        <LoyaltyItem
          title='Haair Shop'
          totalpoints='20'
          points='15'
        />
        <LoyaltyItem
          title='What is Hair'
          totalpoints='30'
          points='3'
        />
        <LoyaltyItem
          title='Sample Store'
          totalpoints='50'
          points='25'
        />
      </div>

      <Footer activepage="loyalty"/>
    </div>
  );
}
