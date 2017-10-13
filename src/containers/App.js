import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.svg'

import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

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

  render() {
    return (
     <div id="app">
        <Nav viewMenu={ this.state.viewMenu } 
             navClick={ this.navClick.bind(this) }/>

        <section className="hero">
          <img className="hero-logo" src={logo} alt='mirrored background'/>
        </section>

        <a className="anchor" name="about"></a>
        <About />

        <a className="anchor" name="skills"></a>
        <Skills />

        <a className="anchor" name="projects"></a>
        <Projects />
     
        <a className="anchor" name="contact"></a>
        <Contact />
      </div>
    );
  }
}

export default App;
