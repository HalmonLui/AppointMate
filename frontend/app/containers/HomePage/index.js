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
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Banner from './barber_logo.png';
import './HomePage.css';

const key = 'home';

export function HomePage({
  username,
  email,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
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
          <Img src="https://media.discordapp.net/attachments/720391383642406934/724073835434868746/appointm8.png" alt="react-boilerplate - Logo" />
          <H2 id="logintext">
            Log In
          </H2>
          <Form onSubmit={onSubmitForm}>
              <Input
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChangeUsername}
              />
              <Input
                id="password"
                type="text"
                placeholder="Password"
                value={username}
                onChange={onChangeUsername}
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
            <StyledButton href="/bookings">Log In</StyledButton>
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
