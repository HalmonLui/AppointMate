import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import A from 'components/A';
import './Footer.css'
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Homeicon from './home.svg';
import Usericon from './user.svg'
import Hearticon from './heart.svg';

function Footer() {
  return (
    <Wrapper>
      <Link class="link" to="/discover">
        <img class="icon" src={Homeicon} alt="home"/>
      </Link>
      <Link class="link" to="/loyalty">
        <img class="icon" src={Homeicon} alt="loyalty"/>
      </Link>
      <Link class="link" to="/saved">
        <img class="icon" src={Hearticon} alt="saved"/>
      </Link>
      <Link class="link" to="/settings">
        <img class="icon" src={Usericon} alt="profile"/>
      </Link>
    </Wrapper>
  );
}

export default Footer;
