/*
 * LoyaltyPage
 *
 * List all the loyalties
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
import LoyaltyItem from 'components/LoyaltyItem';
import Bellicon from './appointmentpage.png';
import './LoyaltyPage.css';
import Modal from 'react-modal';
import quokka from './quokka.png';

class LoyaltyPage extends React.Component {
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
  handleOpenModal = (title, points, totalpoints, imageurl) => {
    var progress_percent = points / totalpoints * 100
    this.setState({ showModal: true, activeImageUrl: imageurl, activeTitle: title, activePoints: points, activeTotalPoints: totalpoints, activeProgressPercent:  progress_percent});
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  render() {
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
            imageurl='https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg'
            title='Sallys Salon'
            totalpoints='20'
            points='5'
            LoyaltyModal={this.handleOpenModal}
          />
          <LoyaltyItem
            imageurl='https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            title='Haair Shop'
            totalpoints='20'
            points='15'
            LoyaltyModal={this.handleOpenModal}
          />
          <LoyaltyItem
            imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwOTrW1_BwLDStRVfYdQIVkNfT0nq6A_RPXA&usqp=CAU'
            title='What is Hair'
            totalpoints='30'
            points='3'
            LoyaltyModal={this.handleOpenModal}
          />
          <LoyaltyItem
            imageurl='https://lh3.googleusercontent.com/proxy/Fq1F8znwQgu3Ne3B_T1KbtpoVBTFLf2VxbbSTj1JBJjnxtf5IFDJw2ev9MxtX0E0khZiayNXagEYO5a0Qhwgz_0GT1xnuq25adLI2_eRU4iY-FLtHlB2dWQ0WDlFkg'
            title='Sample Store'
            totalpoints='50'
            points='25'
            LoyaltyModal={this.handleOpenModal}
          />
        </div>
        <Modal isOpen={this.state.showModal}>
        <div class="modal-green-background">
        </div>
        <button id="close-modal-button" onClick={this.handleCloseModal}>&times;</button>
          <div class="center">
            <h2 id="modal-title">{this.state.activeTitle}</h2>
            <img id="modal-store-image" src={this.state.activeImageUrl} alt="store-image"/>
            <p class="points-text-big">Accrued Loyalty Points:</p>
            <h1 class="green-points-text">{this.state.activePoints} Points</h1>
            <div class="progress-bar-container">
              <div class="progress-bar" style={{width: this.state.activeProgressPercent + '%'}}></div>
            </div>
            <div id="points-container">
              <p class="points-text"><span class="green-points-text">{this.state.activeTotalPoints - this.state.activePoints} more points </span>until your next reward!</p>
            </div>
          </div>
          <p class="regular-text">Details</p>
          <p class="points-text-large">Earn 5 points each time you visit {this.state.activeTitle}</p>
          <p class="regular-text">Rewards</p>
          <form id="form">
            <div>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label for="vehicle1" id="modal-point-label"> 30 points = $5 off haircut</label>
            </div>
            <div>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
              <label for="vehicle2" id="modal-point-label"> 60 points = $12 off haircut</label>
            </div>
            <div>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
              <label for="vehicle3" id="modal-point-label"> 90 points = $20 off haircut</label>
            </div>
            <input type="submit" value="Redeem"/>
          </form>
        </Modal>
        <Footer activepage="loyalty"/>
      </div>
    );
  }
}

export default LoyaltyPage
