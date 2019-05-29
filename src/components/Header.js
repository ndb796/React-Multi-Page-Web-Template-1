import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="header">
        <NavLink exact to="/" className="link" activeClassName="active">HOME</NavLink>
        <NavLink to="/about" className="link" activeClassName="active">ABOUT</NavLink>
        <NavLink to="/faq" className="link" activeClassName="active">FAQ</NavLink>
        <NavLink to="/notice" className="link" activeClassName="active">Notice</NavLink>
    </div>
  );
}

export default Header;