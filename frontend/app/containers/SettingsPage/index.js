/*
 * SettingsPage
 *
 * List all the settings
 */
import React from 'react';
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Img from './Img';
import Banner from './coolcat.jpg';
import Ccicon from './creditcardicon.png'
import './SettingsPage.css';

import 'react-square-payment-form/lib/default.css'
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton
} from 'react-square-payment-form'

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

function cardNonceResponseReceived(errors, nonce, cardData, buyerVerificationToken) {
  if (errors) {
    // this.setState({ errorMessages: errors.map(error => error.message) })
    return
  }

  // this.setState({ errorMessages: [] })
  alert("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
}

function createVerificationDetails() {
  return {
    amount: '100.00',
    currencyCode: "USD",
    intent: "CHARGE",
    billingContact: {
      familyName: "Smith",
      givenName: "John",
      email: "jsmith@example.com",
      country: "GB",
      city: "London",
      addressLines: ["1235 Emperor's Gate"],
      postalCode: "SW7 4JA",
      phone: "020 7946 0532"
    }
  }
}

export default function SettingsPage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div id="top-container">
        <div id="logout-container">
          <Link id="logout-text" to="/">Logout</Link>
        </div>
        <div id="profilepicture-container">
          <Img id="profilepicture" src={Banner} alt="react-boilerplate - Logo" />
        </div>
        <H2>Luis Mona</H2>
      </div>
      <div id="bot-container">
        <div className="bot-info-container">
          <p className="info-title">
            Mobile phone
          </p>
          <p class="info-text">
            617-688-1298
          </p>
        </div>
        <div className="bot-info-container">
          <p className="info-title">
            Email
          </p>
          <p class="info-text">
            luismona@gmail.com
          </p>
        </div>
        <div className="bot-info-container">
          <p className="info-title">
            Payment Methods
          </p>
          <div id="payment-container">
            <img id="creditcardicon" src={Ccicon} alt="credit card icon" />
            <div>
              <p className="info-text">
                Bank of America
              </p>

              <p class="info-text" id="creditnumber">
                Credit ** 2298
              </p>
            </div>
            <a id="addcard">Add a card</a>
          </div>
        </div>
        <div className="bot-info-container">
          <p className="info-title">
            Notifications
          </p>
          <div id="payment-container">
            <p className="info-text" id="creditnumber">
              Get texts for appointment reminders
            </p>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </div>
        </div>
        <SquarePaymentForm
          sandbox={true}
          applicationId=''
          locationId=''
          cardNonceResponseReceived={cardNonceResponseReceived}
          createVerificationDetails={createVerificationDetails}
        >
        <fieldset className="sq-fieldset">
          <CreditCardNumberInput />
          <div className="sq-form-third">
            <CreditCardExpirationDateInput />
          </div>

          <div className="sq-form-third">
            <CreditCardPostalCodeInput />
          </div>

          <div className="sq-form-third">
            <CreditCardCVVInput />
          </div>
        </fieldset>

        <CreditCardSubmitButton>
            Pay $1.00
        </CreditCardSubmitButton>
        </SquarePaymentForm>
      </div>
      <Footer activepage="settings"/>
    </div>
  );
}
