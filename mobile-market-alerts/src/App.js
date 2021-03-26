import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';
import Form from './components/Form/Form.jsx';
import HowThisWorks from './components/HowThisWorks/HowThisWorks';

class App extends Component {
  render () {
    return (
      // React.Fragment exists to wrap JSX elements in an enclosing tag
      <React.Fragment>
        <Banner />
        <HowThisWorks />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
