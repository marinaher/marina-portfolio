import React from 'react';
import Content from '../../components/Content';

const AboutMe = () => (
  <Content pageId='aboutme' pageTitle='About Me' link='About'>
    <p>Lorem ipsum dolor sit amet, et tantas labitur nec. Tempor accusamus vix cu, at oblique gloriatur mel, mea id lucilius consequat. Ei tritani civibus sed, suscipit evertitur vis et, ullum utamur cu his. In justo omittantur ius.</p>

    <div className="myInfo">
      <p>Name: Marina Her</p>
      <p>Email Address: <span id="myEmailAddress">b-her@live.com</span></p>
      <p>Location: Wisconsin</p>
    </div>
  </Content>
);

export default AboutMe;