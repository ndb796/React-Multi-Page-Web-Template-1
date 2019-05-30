import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

import './Header.css';

function Header() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <NavLink exact to="/" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              Home
            </TypoGraphy>
          </NavLink>
          <NavLink to="/about" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              About
            </TypoGraphy>
          </NavLink>
          <NavLink to="/faq" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              FAQ
            </TypoGraphy>
          </NavLink>
          <NavLink to="/notice" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              Notice
            </TypoGraphy>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;