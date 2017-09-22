
import React, { Component } from 'react';
import twitter from './twitter.png';
import facebook from './facebook.png';
import pinterest from './pinterest.png';

class Footer extends Component {
   render() {
      return (
			<footer>
       		<div className="reseaux_sociaux">
              <a href="#"><img src={facebook} className="icons" alt="logo" /></a>
              <a href="#"><img src={twitter} className="icons" alt="logo" /></a>
              <a href="#"><img src={pinterest} className="icons" alt="logo" /></a>
          </div>
			</footer>
        );
  	}
}

export default Footer;