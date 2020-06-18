/*
 * SavedPage
 *
 * List all the settings
 */
import React from 'react';
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
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

export default function SavedPage() {
  return (
    <div>
      <Helmet>
        <title>Saved Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div id="top-container">
        <div id="logout-container">
          <a>Logout</a>
        </div>
        <div id="hearticon-container">
          <Img id="hearticon" src={Heart} alt="heart icon" />
        </div>
        <p id="save-venues-text">Save venues to get alerts for promotions and deals from your favorite places!</p>
      </div>
      <div>
        <SavedItem
          title='Sallys Salon'
          location='123 Street'
          rating='5.0'
          numratings='222'
        />
        <SavedItem
          title='Haair Shop'
          location='2 Washington Road'
          rating='2.1'
          numratings='1529'
        />
        <SavedItem
          title='What is Hair'
          location='38 Boyce Avenue'
          rating='5.0'
          numratings='8237'
        />
        <SavedItem
          title='Sample Store'
          location='18 And Up'
          rating='2.4'
          numratings='68'
        />
      </div>
    </div>
  );
}
