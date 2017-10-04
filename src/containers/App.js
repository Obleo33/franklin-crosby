import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'

class App extends Component {
  render() {
    return (
     <div>
        <Nav />
        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>
        <About />
        <Skills />
     
      </div>
    );
  }
}

export default App;
