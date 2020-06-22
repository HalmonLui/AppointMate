/*
 * SettingsPage
 *
 * List all the settings
 */
import React, { Component } from 'react'
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


export default class SettingsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: [],
      showAddCard: false
    }
  }

  cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
    console.log('NONCEEE')
    console.log("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
    this.setState({showAddCard: !this.state.showAddCard})
    if (errors) {
      this.setState({ errorMessages: errors.map(error => error.message) })
      return
    }

    this.setState({ errorMessages: [] })
    console.log("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)

  }

  createVerificationDetails() {
    console.log('CREATING DEEETS')
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
        postalCode: "12345",
        phone: "020 7946 0532"
      }
    }
  }

  showAddCard = () => {
    this.setState({showAddCard: !this.state.showAddCard})
  }
  render() {
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
                  Sandbox Card
                </p>

                <p class="info-text" id="creditnumber">
                  Credit ** 1111
                </p>
              </div>
              <a id="addcard" onClick={this.showAddCard}>Add a card</a>
            </div>
            {this.state.showAddCard && <div>
              <SquarePaymentForm
                sandbox={true}
                applicationId='sandbox-sq0idb-NHDZ0bT8K4bKVzHkYecrZw'
                locationId='D6S6TV84CCGTM'
                cardNonceResponseReceived={this.cardNonceResponseReceived}
                createVerificationDetails={this.createVerificationDetails}
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
                  Save
              </CreditCardSubmitButton>
              </SquarePaymentForm>

              <div className="sq-error-message">
              {this.state.errorMessages.map(errorMessage =>
                <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
              )}
              </div>
            </div>}
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
        </div>
        <Footer activepage="settings"/>
      </div>
    );
  }
}
