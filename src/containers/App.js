import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

import Nav from '../components/Nav'

class App extends Component {
  render() {
    return (
     <div>
        <Nav />
        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>
     
      </div>
    );
  }
}

export default App;
