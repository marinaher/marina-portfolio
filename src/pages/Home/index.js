import React from 'react';
import Content from '../../components/Content';
import mherImage from '../../images/mher1.JPG';
import './home.css';

const Home = () => (
  <Content pageId='home' pageTitle='Home' link='Home'>
    <img className='mherImg' alt='ImageOfMarina' src={mherImage}/>
  </Content>
)

export default Home;