
import React, { Component } from 'react';
import logo from './logo.svg';
import Home, { home } from '../../page_content/home';
import Main, { main } from '../pageComponent/main';
import Form, { form } from '../../page_content/form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
  super();
  }
   render() {
  
      return (
        <Router>
        <div>
         	<header>
       
          <div>
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
          </div>
          <div>
            <Link to={'/main'}><button>Inscription</button></Link>
            <Link to={'/form'}><button>Connexion</button></Link>
          </div>
        	</header>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/main' component={Main} />
              <Route path='/form' component={Form} />
          </Switch>
          </div>
        </Router>

        );
  	}
}

export default Header;
