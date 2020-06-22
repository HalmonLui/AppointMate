/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import StyledButton from 'components/Button'
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { changePassword } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from './full-logo.png';
import logosquare from './logo-with-square.png';
import './HomePage.css';

const key = 'home';

export function HomePage({
  username,
  email,
  password,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  onChangePassword
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);


  const reposListProps = {
    loading,
    error,
    repos,
  };


  return (
    <article>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="Login page"
        />
      </Helmet>
      <div>
        <Section>
          <img src={logosquare} alt="logo" id="logo"/>
          <div id="signup-container">
            <H2 id="logintext">
              Log In
            </H2>
            <a href="/register" id="login-link">Register</a>
          </div>
          <Form onSubmit={onSubmitForm}>
              <Input
                id="xemail"
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChangeUsername}
              />
              <Input
                id="xpassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              />
            <div id="rememberme">
              <Input
                id="rememberme"
                type="checkbox"
                placeholder="huh"
                onChange={onChangeUsername}
                value={username}
              />
              Remember Me
              </div>
            <StyledButton href="/discover">Log In</StyledButton>
          </Form>
          <a id="forgotpassword">Forgot your password?</a>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
