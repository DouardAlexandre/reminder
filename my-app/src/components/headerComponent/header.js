
import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
   render() {
      return (
         	<header>
				    <div className="App">
	        		<div className="App-header">
	          			<img src={logo} className="App-logo" alt="logo" />
	       		 	</div>
	         	</div>
        	</header>
        );
  	}
}

export default Header;