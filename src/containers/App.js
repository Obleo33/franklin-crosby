import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

class App extends Component {
  render() {
    return (
     <div>
        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>
        <section className="contact">
          <h2>FRANKLIN CROSBY</h2>
          <p>PHONE: 303-887-2413</p>
          <p>EMAIL: obleo33@gmail.com</p>
        </section>
      </div>
    );
  }
}

export default App;
