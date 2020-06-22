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
  constructor(props) {
    super(props);
    this.state = {businesses:
      {
        'trending': [],
        'recommendations': [],
        'hot': []
      }
    };
  }

  componentDidMount() {
    // For testing without fetching from localhost
    // this.setState({
    //   businesses:
    //     {
    //       trending: [
    //         {
    //           'title': 'Sallys Salooon',
    //           'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
    //           'services': 'Cut ur hair, wash',
    //           'rating': '1.1',
    //           'numratings': '10'
    //         },
    //         {
    //           'title': 'Sallys Nails',
    //           'services': 'cut nails, gel',
    //           'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
    //           'rating': '1.5',
    //           'numratings': '13'
    //         },
    //         {
    //           'title': 'Sallys Eyes',
    //           'services': 'makeup, eyes',
    //           'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
    //           'rating': '4.1',
    //           'numratings': '222'
    //         },
    //         // {
    //         //   'title': 'Sallys Salon',
    //         //   'services': 'haircuts',
    //         //   'imageurl': 'https://diana-cdn.naturallycurly.com/Articles/BP_NY-Salons-.jpg',
    //         //   'rating': '2.1',
    //         //   'numratings': '123'
    //         // }
    //       ],
    //       recommendations: [
    //         {
    //           'title': 'Sallys Salooon',
    //           'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
    //           'services': 'Cut ur hair, wash',
    //           'rating': '1.1',
    //           'numratings': '10'
    //         },
    //         {
    //           'title': 'Sallys Nails',
    //           'services': 'cut nails, gel',
    //           'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
    //           'rating': '1.5',
    //           'numratings': '13'
    //         },
    //         {
    //           'title': 'Sallys Eyes',
    //           'services': 'makeup, eyes',
    //           'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
    //           'rating': '4.1',
    //           'numratings': '222'
    //         },
    //         {
    //           'title': 'Sallys Salon',
    //           'services': 'haircuts',
    //           'imageurl': 'https://diana-cdn.naturallycurly.com/Articles/BP_NY-Salons-.jpg',
    //           'rating': '2.1',
    //           'numratings': '123'
    //         }
    //       ],
    //       hot: [
    //         {
    //           'title': 'Sallys Salooon',
    //           'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
    //           'services': 'Cut ur hair, wash',
    //           'rating': '1.1',
    //           'numratings': '10'
    //         },
    //         {
    //           'title': 'Sallys Nails',
    //           'services': 'cut nails, gel',
    //           'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
    //           'rating': '1.5',
    //           'numratings': '13'
    //         },
    //         {
    //           'title': 'Sallys Eyes',
    //           'services': 'makeup, eyes',
    //           'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
    //           'rating': '4.1',
    //           'numratings': '222'
    //         },
    //         {
    //           'title': 'Sallys Salon',
    //           'services': 'haircuts',
    //           'imageurl': 'https://diana-cdn.naturallycurly.com/Articles/BP_NY-Salons-.jpg',
    //           'rating': '2.1',
    //           'numratings': '123'
    //         }
    //       ]
    //     }
    // })

    fetch("http://localhost:5000/businesses")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            businesses: result
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
  }

  render(){
    const trendingItems = this.state.businesses.trending.map((item) =>
    <Link to='/business' class="discover-trending-link">
      <Card
        imageurl={item.imageurl}
        title={item.title}
        services={item.services}
        rating={item.rating}
        numratings={item.numratings}
      />
    </Link>
    )
    const recommendationItems = this.state.businesses.recommendations.map((item) =>
      <SmallCard
        imageurl={item.imageurl}
        title={item.title}
        services={item.services}
        rating={item.rating}
        numratings={item.numratings}
      />
    )
    const hotItems = this.state.businesses.hot.map((item) =>
      <SmallCard
        imageurl={item.imageurl}
        title={item.title}
        services={item.services}
        rating={item.rating}
        numratings={item.numratings}
      />
    )

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
            placeholder="Search for a service or venue"
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
            {trendingItems}
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
            <p>Piercing Parlor</p>
          </div>
        </div>

        <div id="discover-recommendations-container">
          <H3 id="discover-recommendations-header">
            <FormattedMessage {...messages.scaffoldingHeader2}/>
          </H3>
          <div id="discover-recommendations-card-container">
            {recommendationItems}
          </div>
        </div>

        <div id="discover-recommendations-container">
          <H3 id="discover-recommendations-header">
            <FormattedMessage {...messages.scaffoldingHeader3}/>
          </H3>
          <div id="discover-recommendations-card-container">
            {hotItems}
          </div>
        </div>
        <Footer activepage="discover"/>
      </div>
    );
  }
}
