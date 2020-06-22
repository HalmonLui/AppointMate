/*
 * SchedulePage
 *
 * List all the schedules
 */
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import './BusinessPage.css';
import ServiceItem from './ServiceItem';
import StaffItem from './StaffItem';
import ReviewItem from './ReviewItem';
import SmallCard from './SmallCard';
import BarberImg from './barberbg.png';
import HairSalonImg from './hairsalonbg.png';
import NailSalonImg from './nailsalonbg.png';
import PiercingImg from './piercingbg.png';
import SpaImg from './spabg.png';
import heartIcon from './heart-icon.png';
import star from './star.png';
import lightning from './lightning.png';
import money from './cash.png';

export default class SchedulePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {businesses:
  //     {
  //       'trending': [],
  //       'recommendations': [],
  //       'hot': []
  //     }
  //   };
  // }

  // componentDidMount() {
  //   // fetch("http://localhost:5000/businesses")
  //   //   .then(res => res.json())
  //   //   .then(
  //   //     (result) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         businesses: result
  //   //       });
  //   //     },
  //   //     // Note: it's important to handle errors here
  //   //     // instead of a catch() block so that we don't swallow
  //   //     // exceptions from actual bugs in components.
  //   //     (error) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         error
  //   //       });
  //   //     }
  //   //   )
  // }

  render(){
    return (
      <div id="businesspage">
        <Helmet>
          <title>Business Page</title>
          <meta
            name="description"
            content="Business Profile"
          />
        </Helmet>
        <Link to="/business" id="back-button">
          <div id="business-back-button">&#12296; Back</div>
        </Link>
        {/*<img id="business-image" src="https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg" alt="store image"/>*/}
        <img id="business-image" src="https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg"/>
        <div id="business-info-container">
          <div id="schedule-title-container">
            <h2>Nicole Salon B</h2>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Book Services</h2>
          <div className="business-section-card" id="business-section-service-card">
              <h3>Most Popular</h3>
              <div id="business-service-item-container">
                <ServiceItem
                  service="Women's Haircut"
                  duration="45 mins"
                  price="100"
                />
                <ServiceItem
                  service="Men's Haircut"
                  duration="30 mins"
                  price="80"
                />
                <ServiceItem
                  service="Full Highlights"
                  duration="4 hrs"
                  price="180"
                />
              </div>

              <h3 id="service-title">Hair Coloring</h3>
              <div id="business-service-item-container">
                <ServiceItem
                  service="Balayage"
                  duration="5 hrs"
                  price="200"
                />
                <ServiceItem
                  service="Ombre"
                  duration="5 hrs"
                  price="280"
                />
                <ServiceItem
                  service="Full Highlights"
                  duration="4 hrs"
                  price="180"
                />
              </div>
          </div>
        </div>

        <div id="schedule-booking-container">
          <div id="schedule-book-top">
            <p>Men's Haircut</p>
            <Link to="/booking" id="schedule-book-link">
              <p>Book</p>
            </Link>
          </div>
          <div id="schedule-days-container">
            <div class="schedule-day-container">
              <p class="schedule-day">SUN</p>
              <p>Aug 2</p>
            </div>
            <div class="schedule-day-container" id="schedule-selected-item">
              <p class="schedule-day">MON</p>
              <p>Aug 3</p>
            </div>
            <div class="schedule-day-container">
              <p class="schedule-day">TUE</p>
              <p>Aug 4</p>
            </div>
            <div class="schedule-day-container">
              <p class="schedule-day">WED</p>
              <p>Aug 5</p>
            </div>
            <div class="schedule-day-container">
              <p class="schedule-day">THU</p>
              <p>Aug 6</p>
            </div>
          </div>
          <div id="schedule-times-container">
            <p class="schedule-time" id="schedule-selected-item">2:45 pm</p>
            <p class="schedule-time">3:00 pm</p>
            <p class="schedule-time">3:30 pm</p>
            <p class="schedule-time">4:00 pm</p>
          </div>
        </div>

        <Footer activepage="discover"/>
      </div>
    );
  }
}
