import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Page from './components/pageComponent/pagecontainer';

//includes
// import './Assets/css/style.css';

class App extends React.Component {
   render() {
      return (
         <div>
         	Salut..
            <Header />
            <Page />
            <Footer />
         </div>
      );
   }
}

export default App;