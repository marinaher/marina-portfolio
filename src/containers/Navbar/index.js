import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Education from '../../components/Education';
import Employment from '../../components/Employment';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import Skills from '../../components/Skills';
import './navbar.css';

const Navbar = () => (
  <Router>
    <nav className="sidebar sidebar-block">     
      <ul className="list">
        <li className="list-item"><Link to="/">Add <br /> Logo <br /> Here</Link></li>
        <li className="list-item"><Link to="/AboutMe">About Me</Link></li>
        <li className="list-item"><Link to="/Skills">Skills</Link></li>
        <li className="list-item"><Link to="/Education">Education</Link></li>
        <li className="list-item"><Link to="/Employment">Employment</Link></li>
        <li className="list-item"><Link to="/Portfolio">Portfolio</Link></li>
        <li className="list-item"><Link to="/Contact">Contact</Link></li>
      </ul>

      <Route exact={true} path="/" component={Home} />
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Education" component={Education} />
      <Route path="/Employment" component={Employment} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </nav>
  </Router>
);

export default Navbar;