import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Link to="/">HOME</Link><br/>
        <Link to="/about">ABOUT</Link><br/>
        <Link to="/faq">FAQ</Link>
    </div>
  );
}

export default Header;