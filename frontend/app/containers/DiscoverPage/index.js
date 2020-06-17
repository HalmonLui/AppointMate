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
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import './DiscoverPage.css';
import Card from './Card'


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
      <div>
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
        <H3>
          <FormattedMessage {...messages.scaffoldingHeader2}/>
        </H3>
        <Card/>
        <H3>
          <FormattedMessage {...messages.scaffoldingHeader3}/>
        </H3>
        <Card/>
      </div>
    );
  }
}
