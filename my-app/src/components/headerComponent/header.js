
import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
   render() {
      return (
         	<header>
          			<img src={logo} className="App-logo" alt="logo" />
                <div>
                  <button>Inscription</button>
                  <button>Connexion</button>
                </div>
        	</header>
        );
  	}
}

export default Header;