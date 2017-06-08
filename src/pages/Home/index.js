import React from 'react';
import Content from '../../components/Content';
import './home.css';

const Home = () => (
  <Content pageId='home' pageTitle='' link='Home'>
    <div className='homeIntro'>
      <p className='hello'>Hello, I'm</p>
      <p className='name'>Marina Her</p>
      <p className='profession'>Frontend Software Developer</p>
    </div>
  </Content>
)

export default Home;