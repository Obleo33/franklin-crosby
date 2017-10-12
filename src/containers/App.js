import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

class App extends Component {
  constructor(){
    super()
    this.state = {
      viewMenu: false,
    }
  }

  navClick() {
    this.setState({ viewMenu: !this.state.viewMenu })
  }

  linkClick() {
    console.log('hey');
  }


  render() {
    return (
     <div id="app">
        <Nav viewMenu={ this.state.viewMenu } 
             navClick={ this.navClick.bind(this) }
             linkClick={ this.linkClick.bind(this) }/>

        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>

        <About />

        <Skills />

        <Projects />
     
      </div>
    );
  }
}

export default App;
