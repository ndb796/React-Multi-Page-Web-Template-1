import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="header">
        <NavLink exact to="/" className="link" activeClassName="active">HOME</NavLink><br/>
        <NavLink to="/about" className="link" activeClassName="active">ABOUT</NavLink><br/>
        <NavLink to="/faq" className="link" activeClassName="active">FAQ</NavLink>
    </div>
  );
}

export default Header;