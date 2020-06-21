/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
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
import Card from './Card';
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
        <div>Back</div>
        {/*<img id="business-image" src="https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg" alt="store image"/>*/}
        <img id="business-image" src="https://cutewallpaper.org/21/one-punch-man-wallpaper-hd/Wallpaper-of-Anime,-One-Punch-Man,-Season-2,-Saitama-.jpg"/>
        <div>
          <div>
            <h2>Hair No More</h2>
            <div>
              <img src={heartIcon} />
            </div>
          </div>
          <div>
            <div>
              <img src={star} />
              <p>85 ratings</p>
            </div>
            <p>120 Oscar Street</p>
            <p>212-888-0000</p>
          </div>
          <div>
            <p>0.8 mi</p>
            <p>$$$</p>
          </div>
        </div>

        <div>
          <div>
            <img src={lightning} alt="lightning"/>
            <p>Instant booking</p>
          </div>
          <div>
            <img src={money} alt="money"/>
            <p>In-app payment</p>
          </div>
        </div>

        <div>
          <h2>Location</h2>
          <p>MAP IMA MAP</p>
        </div>

        <div>
          <h2>Book Services</h2>
          <div>
              <h3>Most Popular</h3>
              <p>service item here</p>
          </div>
        </div>

        <div>
          <h2>Book with Staff</h2>
          <div>
              <div>
                  <p>Staff component here</p>
              </div>
              <p>See all staff</p>
          </div>
        </div>

        <div>
          <h2>Loyalty Program Policy</h2>
          <div>
            <p>You currently have:</p>
            <p>0 points</p>
            <p>Earn 10 points each time you visit and spend over $50 in products or services</p>
            <p>Learn more</p>
          </div>
        </div>

        <div>
          <h2>Top Reviews</h2>
          <div>
            <div>
              5* 85 ratings
            </div>
            <p>Review COmponent Here</p>
            <p>Review COmponent Here</p>
            <p>See more reviews</p>
          </div>
        </div>

        <div>
          <h2>Other Suggestions</h2>
          <div>
            <p>Suggestion COmponent Here</p>
          </div>
        </div>


        <Footer activepage="discover"/>
      </div>
    );
  }
}
