import React, { Component } from 'react';
import NavList from '../../containers/NavList';
import AboutMe from '../../pages/AboutMe';
import Contact from '../../pages/Contact';
import Education from '../../pages/Education';
import Employment from '../../pages/Employment';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import Skills from '../../pages/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavList />
        <Home />
        <AboutMe />
        <Skills />
        <Education />
        <Employment />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
