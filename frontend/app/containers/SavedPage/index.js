/*
 * SavedPage
 *
 * List all the settings
 */
import React, { Component } from 'react';
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import H2 from 'components/H2';
import SavedItem from 'components/SavedItem';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Img from './Img';
import Heart from './heart-icon.png';
import Ccicon from './creditcardicon.png'
import './SavedPage.css';

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;


export default class SavedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {saved_items: []};
  }
  componentDidMount() {
    this.setState({
      saved_items: [
        {
          'title': 'Sallys Salooon',
          'location': '123 Streat',
          'rating': '1.1',
          'numratings': '123'
        },
        {
          'title': 'Sallys Salooon',
          'location': '123 Streat',
          'rating': '1.1',
          'numratings': '123'
        },
        {
          'title': 'Sallys Salooon',
          'location': '123 Streat',
          'rating': '1.1',
          'numratings': '123'
        },
        {
          'title': 'Sallys Salooon',
          'location': '123 Streat',
          'rating': '1.1',
          'numratings': '123'
        }
      ]
    })
  }


  render() {
    const savedItems = this.state.saved_items.map((item) =>
      <SavedItem
        title={item.title}
        location={item.location}
        rating={item.rating}
        numratings={item.numratings}
      />
    )

    return (
      <div>
        <Helmet>
          <title>Saved Page</title>
          <meta
            name="description"
            content="Saved venues"
          />
        </Helmet>
        <div id="top-save-container">
          <div id="hearticon-container">
            <Img id="hearticon" src={Heart} alt="heart icon" />
          </div>
          <p id="save-venues-text">Save venues to get alerts for promotions and deals from your favorite places!</p>
        </div>
        <div>
          {savedItems}
        </div>
        <Footer activepage="saved"/>
      </div>
    );
  }
}
