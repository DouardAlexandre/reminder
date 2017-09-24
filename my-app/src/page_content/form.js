import React, { Component } from 'react';

import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
	

class Form extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <Link to={'/board'}><button>connexion</button></Link>
        </div>
        
        <div>
            <div className="triangle_black_border"></div>
            <div className="triangle_red"></div>
            <div className="triangle_red_small"></div>
          </div>
      </div>
    );
  }
}
    
export default Form;