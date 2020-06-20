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
import './DiscoverPage.css';
import Card from './Card';
import SmallCard from './SmallCard';
import BarberImg from './barberbg.png';
import HairSalonImg from './hairsalonbg.png';
import NailSalonImg from './nailsalonbg.png';
import PiercingImg from './piercingbg.png';
import SpaImg from './spabg.png';

export default class DiscoverPage extends Component {
  data = [
    {
      key: 'Beauty',
      value: 'Beauty Paradise',
    },
    {
      key: 'flower',
      value: 'Flower Shop',
    },
    {
      key: 'nail',
      value: 'Nail Salon',
    },
  ]
  render(){
    return (
      <div id="discoverpage">
        <Helmet>
          <title>Discover Page</title>
          <meta
            name="description"
            content="Discover page stuff"
          />
        </Helmet>

        <div id="discover-top-container">
          <H1 id="hi">
            Hi, Name
          </H1>
          <div id="search-container">
            <ReactSearchBox
            placeholder="Placeholder"
            value="Search for a service or venue"
            data={this.data}
            callback={record => console.log(record)}
            />
          </div>
        </div>

        <div id="discover-trending-container">
          <H2>
            <FormattedMessage {...messages.scaffoldingHeader}/>
          </H2>
          <div id="discover-trending-card-container">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>

        <div id="discover-selection-container">
          <div class="discover-selection-item">
            <img src={HairSalonImg} />
            <p>Hair Salon</p>
          </div>
          <div class="discover-selection-item">
            <img src={NailSalonImg} />
            <p>Nail Salon</p>
          </div>
          <div class="discover-selection-item">
            <img src={BarberImg} />
            <p>Barbershop</p>
          </div>
          <div class="discover-selection-item">
            <img src={SpaImg} />
            <p>Spa Center</p>
          </div>
          <div class="discover-selection-item">
            <img src={PiercingImg} />
            <p>Piercing Palor</p>
          </div>
        </div>

        <div id="discover-recommendations-container">
          <H3 id="discover-recommendations-header">
            <FormattedMessage {...messages.scaffoldingHeader2}/>
          </H3>
          <div id="discover-recommendations-card-container">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>

        <div id="discover-recommendations-container">
          <H3 id="discover-recommendations-header">
            <FormattedMessage {...messages.scaffoldingHeader3}/>
          </H3>
          <div id="discover-recommendations-card-container">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>
        <Footer activepage="discover"/>
      </div>
    );
  }
}
