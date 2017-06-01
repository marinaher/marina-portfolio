import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Education from '../../components/Education';
import Employment from '../../components/Employment';
import Home from '../../components/Home';
import MyLogo from '../../images/myLogo.png';
import Portfolio from '../../components/Portfolio';
import Skills from '../../components/Skills';
import './navbar.css';

const Navbar = () => (
  <Router>
    <nav className="sidebar sidebar-block">     
      <ul className="list">
        <li className="list-item"><Link to="/"><img className="logo" src={MyLogo} alt="Logo"/></Link></li>
        <li className="list-item"><Link to="/AboutMe">ABOUT ME</Link></li>
        <li className="list-item"><Link to="/Skills">SKILLS</Link></li>
        <li className="list-item"><Link to="/Education">EDUCATION</Link></li>
        <li className="list-item"><Link to="/Employment">EMPLOYMENT</Link></li>
        <li className="list-item"><Link to="/Portfolio">PORTFOLIO</Link></li>
        <li className="list-item"><Link to="/Contact">CONTACT</Link></li>
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