import React from 'react';
import { NavLink } from 'react-router-dom';

const possiblePages = ['about', 'projects', 'contact'];

const Header = () => {
  return (
    <div id="header">
      <h1>Marcia Wan</h1>
      {possiblePages.map(pageName => (
        <NavLink to={`/${pageName}`} activeClassName="selected">
          {pageName.toUpperCase()}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
