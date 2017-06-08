import React from 'react';

const NavListItem = ({link}) => (
  <li className="list-item">
    <a href={`#${link}Link`} data-hover={link}>{link}</a>
  </li>
);

export default NavListItem;