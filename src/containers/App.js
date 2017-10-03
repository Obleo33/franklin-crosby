import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

import Nav from '../components/Nav'
import About from '../components/About'

class App extends Component {
  render() {
    return (
     <div>
        <Nav />
        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>
        <About />
     
      </div>
    );
  }
}

export default App;
