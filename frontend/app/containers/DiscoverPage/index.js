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
import Card from './Card'
import BarberImg from './barberbg.png'
import HairSalonImg from './hairsalonbg.png'
import NailSalonImg from './nailsalonbg.png'
import PiercingImg from './piercingbg.png'
import SpaImg from './spabg.png'

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
      <div class="gen_padding"> 
        <Helmet>
          <title>Discover Page</title>
          <meta
            name="description"
            content="Discover page stuff"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <ReactSearchBox
        placeholder="Placeholder"
        value="Search for a service or venue"
        data={this.data}
        callback={record => console.log(record)}
        />
        <br/>
        <H2>
          <FormattedMessage {...messages.scaffoldingHeader}/>
        </H2>
        <Card/>
        <br/>
        <div class="row">
          <div class="column-five">
            <img src={HairSalonImg} width="50%"/>
            <p>Hair Salon</p>
          </div>
          <div class="column-five">
            <img src={NailSalonImg} width="50%"/>
            <p>Nail Salon</p>
          </div>
          <div class="column-five">
            <img src={BarberImg} width="50%"/>
            <p>Barbershop</p>
          </div>
          <div class="column-five">
            <img src={SpaImg} width="50%"/>
            <p>Spa Center</p>
          </div>
          <div class="column-five">
            <img src={PiercingImg} width="50%"/>
            <p>Piercing Palor</p>
          </div>
        </div>
        <br/>
        <H3>
          <FormattedMessage {...messages.scaffoldingHeader2}/>
        </H3>
        <Card/>
        <br/>
        <H3>
          <FormattedMessage {...messages.scaffoldingHeader3}/>
        </H3>
        <Card/>
        <Footer activepage="discover"/>
      </div>
    );
  }
}
