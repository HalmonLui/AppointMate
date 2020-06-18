/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import DiscoverPage from 'containers/DiscoverPage/Loadable';
import BookingsPage from 'containers/BookingsPage/Loadable';
import LoyaltyPage from 'containers/LoyaltyPage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import SavedPage from 'containers/SavedPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import './App.css';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  margin-bottom: 10em;
`;

export default function App() {
  return (
    <AppWrapper id="app">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/bookings" component={BookingsPage} />
        <Route path="/loyalty" component={LoyaltyPage} />
        <Route path="/saved" component={SavedPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
