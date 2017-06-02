import React from 'react';
import NavListItem from '../../components/NavListItem';

const createNav = (pageArray) => {
  const pageLinks = [];

  for (var i = 0; i < pageArray.length; i++) {
    pageLinks.push(<NavListItem link={pageArray[i]}/>);
  }

  return pageLinks;
};

// const scrollToSection = ({sectionName}) => {
//   // Do some stuff to animate to sectionName
// };

const NavList = (link) => {
  const pageArray = ['Home', 'About', 'Skills', 'Education', 'Employment', 'Portfolio', 'Contact'];
  const buildIt = createNav(pageArray);

  return(
    <ul className='list'>
      {buildIt}
    </ul>
  )
};

export default NavList;