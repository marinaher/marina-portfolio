import React from 'react';

const NavListItem = ({link}) => (
  <li className="list-item">
    <a href={`#${link}Link`}>{link}</a>
  </li>
);

export default NavListItem;