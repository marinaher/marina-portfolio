import React from 'react';
import mherImage from '../../images/mher1.JPG';
import './home.css';

const Home = () => (
  <section>
    <h1>Home Page</h1>
    <img className="mherImg" alt="ImageOfMarina" src={mherImage}/>
  </section>
)

export default Home;