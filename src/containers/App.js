import React, { Component } from 'react';
import '../styles/App.css';

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
      viewIndex: 0,
      previousIndex: 0,
    }
  }

  navClick() {
    this.setState({ viewMenu: !this.state.viewMenu })
  }

  handleView(e) {
    this.setState({ previousIndex: this.state.viewIndex,
                    viewIndex: e.target.value })
  }

  view(viewIndex) {
    let viewArr = [<About />, <Skills />, <Projects />, <Contact />]

    return viewArr[viewIndex]
  }

  render() {
    return (
     <div id="app">
        <Nav viewMenu={ this.state.viewMenu } 
             navClick={ this.navClick.bind(this) }
             handleView={ this.handleView.bind(this) }/>

        <section className="view">
          { this.view(this.state.viewIndex) }
        </section>

      </div>
    );
  }
}

export default App;