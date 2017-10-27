import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo_rotate.svg'

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
          <About />
        </section>


        <Skills />

        <Projects />

        <Contact />
      </div>
    );
  }
}

export default App;
