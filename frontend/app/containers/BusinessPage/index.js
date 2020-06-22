/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
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

export default class BusinessPage extends Component {
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
        <Link to="/discover" id="back-button">
          <div id="business-back-button">&#12296; Back</div>
        </Link>
        {/*<img id="business-image" src="https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg" alt="store image"/>*/}
        <img id="business-image" src="https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg"/>
        <div id="business-info-container">
          <div id="title-container">
            <h2>Sally's Salon</h2>
            <div>
              <img id="heart" src={heartIcon} alt="heart" />
            </div>
          </div>
          <div id="business-info-text-container">
            <div id="business-info-text-left-container">
              <div id="business-rating-container">
                <img id="star" src={star} alt="star"/>
                <p>5.0</p>
                <p>85 ratings</p>
              </div>
              <p>120 Oscar Street</p>
              <p>212-888-0000</p>
            </div>
            <div id="business-info-text-right-container">
              <p>0.8 mi</p>
              <p>$$$</p>
            </div>
          </div>
        </div>

        <div id="business-icon-section">
          <div id="business-icon-container">
            <img id="icon" src={lightning} alt="lightning"/>
            <p>Instant booking</p>
          </div>
          <div id="business-icon-container">
            <img id="icon" src={money} alt="money"/>
            <p id="business-cash-text">In-app payment</p>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Location</h2>
          <div className="business-section-card" id="business-map-container">
            {/*<img id="business-map" src="https://scottsdalehairstylist.net/wp-content/uploads/map-salon-suites.png" alt="map"/>*/}
            <Iframe
              width="100%"
              url="https://www.google.com/maps/embed/v1/place?key=AIzaSyAivJD4AnACirkXM3_SRsrPxYVXllcXHMM&q=Space+Needle,Seattle+WA"
            />
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
              <Link to="/schedule" class="business-section-more">
                <p class="business-section-more">See more services</p>
              </Link>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Book with Staff</h2>
          <div className="business-section-card">
              <div id="business-staff-item-container">
                  <StaffItem
                    imageurl="https://i.quotev.com/img/q/u/19/10/3/hos6ugmrdu.jpg"
                    name="Bob Smith"
                    role="Lead stylist"
                  />
                  <StaffItem
                    imageurl="https://www.shareitnow.net/wp-content/uploads/2020/04/Kimetsu-no-Yaiba-Demon-slayer-chapter-201.jpg"
                    name="Bobby Heck"
                    role="Stylist"
                  />
                  <StaffItem
                    imageurl="https://www.funimation.com/blog/wp-content/uploads/2019/10/Screen-Shot-2019-10-21-at-1.11.27-PM.png"
                    name="Bobber Hak"
                    role="Stylist"
                  />
              </div>
              <p class="business-section-more">See all staff</p>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Loyalty Program Policy</h2>
          <div className="business-section-card">
            <p id="business-loyalty-you-text">You currently have:</p>
            <p id="business-loyalty-points">0 points</p>
            <p id="business-loyalty-earn-text">Earn 10 points each time you visit and spend over $50 in products or services</p>
            <p class="business-section-more">Learn more</p>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Top Reviews</h2>
          <div className="business-section-card" id="business-section-reviews-card">
            <div id="business-review-top-container">
              <img id="business-review-star" src={star} alt="star" />
              <p id="business-review-rating">5.0</p>
              <p id="business-review-num-ratings">85 ratings</p>
            </div>
            <div>
              <ReviewItem
                imageurl="https://www.funimation.com/blog/wp-content/uploads/2019/10/Screen-Shot-2019-10-21-at-1.11.27-PM.png"
                name="Customer One"
                rating="5.0"
                date="Jan 1, 2020"
                review="lorem ipsum joe vestibulum ornare nec risus mama. Aliquam eget cursus massa, ligma quis henderit urna. Nam figma euismod mi at sugma sagittis fringilla"
              />
              <ReviewItem
                imageurl="https://i.quotev.com/img/q/u/19/10/3/hos6ugmrdu.jpg"
                name="Customer Two"
                rating="5.0"
                date="Feb 2, 2020"
                review="lorem ipsum joe vestibulum ornare nec risus mama. Aliquam eget cursus massa, ligma quis henderit urna. Nam figma euismod mi at sugma sagittis fringilla"
              />
            </div>
            <p class="business-section-more" id="business-review-more">See more reviews</p>
          </div>
        </div>

        <div id="business-section">
          <h2 id="business-section-title">Other Suggestions</h2>
          <div className="business-section-card" id="business-suggestion-container">
            <SmallCard
              title="Sallys Salon"
              imageurl="https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg"
              services="Cut ur hair, wash"
              rating="4.2"
              numratings="251"
              />
            <SmallCard
              title="Johns Nails"
              imageurl="https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg"
              services="Trim, Gel"
              rating="4.5"
              numratings="51"
              />
            <SmallCard
              title="Beauty Salon"
              imageurl="https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg"
              services="Makeup, Eyes"
              rating="4.7"
              numratings="652"
              />
          </div>
        </div>



        <Footer activepage="discover"/>
      </div>
    );
  }
}
