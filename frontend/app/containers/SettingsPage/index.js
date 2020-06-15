/*
 * SettingsPage
 *
 * List all the settings
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Img from './Img';
import Banner from './coolcat.jpg';
import Ccicon from './creditcardicon.png'
import './SettingsPage.css';

export default function SettingsPage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div id="top-container">
        <div id="logout-container">
          <a>Logout</a>
        </div>
        <div id="profilepicture-container">
          <Img id="profilepicture" src={Banner} alt="react-boilerplate - Logo" />
        </div>
        <H2>Snam Ghosh</H2>
        <div id="toggleswitch">
          <p id="toggle-profile">Profile</p>
          <p id="toggle-saved">Saved</p>
        </div>
      </div>
      <div id="bot-container">
        <div class="bot-info-container">
          <p class="info-title">
            Mobile phone
          </p>
          <p class="info-text">
            888-888-8888
          </p>
        </div>
        <div class="bot-info-container">
          <p class="info-title">
            Email
          </p>
          <p class="info-text">
            email@email.email
          </p>
        </div>
        <div class="bot-info-container">
          <p class="info-title">
            Payment Methods
          </p>
          <div id="payment-container">
            <img id="creditcardicon" src={Ccicon} alt="credit card icon" />
            <div>
              <p class="info-text">
                Bank of America
              </p>
              <p class="info-text" id="creditnumber">
                Credit ** 8888
              </p>
            </div>
            <a id="addcard">Add a card</a>
          </div>
        </div>
        <div class="bot-info-container">
          <p class="info-title">
            Notifications
          </p>
          <p class="info-text" id="creditnumber">
            Get texts for appointment reminders
          </p>
        </div>

      </div>

    </div>
  );
}
