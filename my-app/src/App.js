import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Main from './components/pageComponent/main';
import Footer from './components/footerComponent/footer';

/*import logo from './components/headerComponent/logo.svg';*/
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;