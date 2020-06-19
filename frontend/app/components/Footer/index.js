import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import A from 'components/A';
import './Footer.css'
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Homeicon from './home.png';
import Bellicon from './appointments.png'
import Usericon from './person.png'
import Hearticon from './favorite.png';

function Footer(props) {
  const activepage = 'brightness(0) saturate(100%) invert(67%) sepia(23%) saturate(681%) hue-rotate(84deg) brightness(92%) contrast(90%)'
  let appointmentstyle, discoverstyle, savedstyle, settingsstyle
  if (props.activepage === 'appointments' || props.activepage === 'loyalty'){
    appointmentstyle = activepage
  } else if(props.activepage === 'discover'){
    discoverstyle = activepage
  } else if(props.activepage === 'saved'){
    savedstyle = activepage
  } else if(props.activepage === 'settings'){
    settingsstyle = activepage
  }

  return (
    <Wrapper>
      <Link class="link" to="/discover">
        <img class="icon" src={Homeicon} alt="home" style={{filter: discoverstyle}}/>
      </Link>
      <Link class="link" to="/appointments">
        <img class="icon" src={Bellicon} alt="loyalty" style={{filter: appointmentstyle}}/>
      </Link>
      <Link class="link" to="/saved">
        <img class="icon" src={Hearticon} alt="saved" style={{filter: savedstyle}}/>
      </Link>
      <Link class="link" to="/settings">
        <img class="icon" src={Usericon} alt="profile" style={{filter: settingsstyle}}/>
      </Link>
    </Wrapper>
  );
}

export default Footer;
