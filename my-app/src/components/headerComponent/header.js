
import React, { Component } from 'react';
import logo from './logo.svg';
import Home, { home } from '../../page_content/home';
import Inscription, { inscription } from '../../page_content/inscription';
import Connexion, { connexion } from '../../page_content/connection';
import Board, { board } from '../../page_content/board';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
 
   render() {
  
      return (
        <BrowserRouter>
        <div>
         	<header>
          <div>
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
          </div>
          <div>
            <Link to={'/inscription'}><button>Inscription</button></Link>
            <Link to={'/connection'}><button>Connexion</button></Link>
          </div>
        	</header>
          <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/inscription' component={Inscription} />
              <Route path='/connection' component={Connexion} />
              <Route path='/board' component={Board} />
          </Switch>
          </div>
        </BrowserRouter>

        );
  	}
}

export default Header;
