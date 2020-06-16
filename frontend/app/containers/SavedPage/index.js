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
import Banner from './coolcat.jpg';
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
        <div id="profilepicture-container">
          <Img id="profilepicture" src={Banner} alt="react-boilerplate - Logo" />
        </div>
        <H2>Soooonam Ghosh</H2>
        <div id="toggleswitch">
          <p id="toggle-saved">Profile</p>
          <p id="toggle-profile">Saved</p>
        </div>
      </div>
      <div>
        <SavedItem/>
        <SavedItem/>
        <SavedItem/>
        <SavedItem/>
      </div>
    </div>
  );
}
