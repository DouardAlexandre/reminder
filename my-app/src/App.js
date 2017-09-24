import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Home from './page_content/home';
import Footer from './components/footerComponent/footer';

/*import logo from './components/headerComponent/logo.svg';*/
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
       
        <Footer />
      </div>
    );
  }
}

export default App;