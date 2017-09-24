import React, { Component } from 'react';

import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
	

class formConnection extends Component {
	constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    {/*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/}
  }
  render() {
    return (
      <div>
        <div className="form_connection">
        <div className="triangle_white_small_form"></div>
            <form onSubmit={this.handleSubmit}>
             
              <input id="username"  name="username" placeholder="username" type="text" />

            
              <input id="email" name="email" placeholder="email" type="email" />

            
              <input id="password" placeholder="password" name="password" type="text" />

              <Link to={'/board'}><button>connexion</button></Link>
            </form>
         
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
    
export default formConnection;