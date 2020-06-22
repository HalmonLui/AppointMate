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
import check from './check.png'

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {receipturl: ''};
  }

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
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://addevent.com/libs/atc/1.6.1/atc.min.js";
        script.async = true;

        document.body.appendChild(script);

        fetch("http://localhost:5000/sendPayment")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  receipturl: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )

      this.setState({receipturl: 'https://squareupsandbox.com/receipt/preview/9mwGCNiOAKnsD9bkDxTNLIyHWWdZY'})
    }
  render(){
    return (
      <div id="businesspage">
        <Helmet>
          <title>Confirmation Page</title>
          <meta
            name="description"
            content="Business Profile"
          />
        </Helmet>
        <Link to="/discover" id="back-button">
          <div id="business-back-button">&#12296; Back</div>
        </Link>

        <div id="confirmation-top-container">
          <img src={check} alt="checkmark" id="checkmark"/>
          <h2>Thank you for booking!</h2>
          <div title="Add to Calendar" class="addeventatc" id="addevent">
              Add to Calendar
              <span class="start">2:45</span>
              <span class="end">3:30</span>
              <span class="timezone">America/Los_Angeles</span>
              <span class="title">Appointment at Nicole Salon B</span>
              <span class="description">Men's Haircut with Sally</span>
              <span class="location">Nicole Salon B</span>
          </div>
        </div>

        <div id="business-section">
          <div className="business-section-card" id="confirmation-text-container">
            <p class="confirmation-text">Your booking for a</p>
            <p class="confirmation-text"><b>Men's Haircut</b></p>
            <p class="confirmation-text">at <b>Nicole Salon B</b> has been</p>
            <p class="confirmation-text">confirmed for Monday,</p>
            <p class="confirmation-text"><b id="confirmation-date-text">Aug 3, 2020</b> at <b id="confirmation-date-text">2:45 pm</b></p>
            <Link to="/confirmation" id="view-details-link">
              {this.state.receipturl && <p onClick={()=> window.open(this.state.receipturl, "_blank")}>View Receipt</p>}
            </Link>
            <Link to="/discover" id="return-link">
              <p>Return</p>
            </Link>
          </div>
        </div>


        <Footer activepage="discover"/>
      </div>
    );
  }
}
