
import React, { Component } from 'react';
import twitter from './twitter.png';
import facebook from './facebook.png';
import pinterest from './pinterest.png';

class Footer extends Component {
   render() {
      return (
			<footer>
              <a className="link" href="#"><img src={facebook} className="icons" alt="logo" /></a>
              <a className="link" href="#"><img src={twitter} className="icons" alt="logo" /></a>
              <a className="link" href="#"><img src={pinterest} className="icons" alt="logo" /></a>
			</footer>
        );
  	}
}

export default Footer;