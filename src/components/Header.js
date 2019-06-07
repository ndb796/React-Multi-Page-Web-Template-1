import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { MultiLang, Determinator } from "react-multi-language";

import './Header.css';

function Header(props) {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <NavLink exact to="/" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              {props.t('Home')}
            </TypoGraphy>
          </NavLink>
          <NavLink to="/about" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              {props.t('About')}
            </TypoGraphy>
          </NavLink>
          <NavLink to="/faq" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              {props.t('Faq')}
            </TypoGraphy>
          </NavLink>
          <NavLink to="/notice" className="link" activeClassName="active">
            <TypoGraphy variant="h6" color="inherit">
              {props.t('Notice')}
            </TypoGraphy>
          </NavLink>
          <TypoGraphy variant="h6" color="inherit" onClick={() => props.i18n.changeLanguage(props.i18n.language === 'ENG' ? 'KOR' : 'ENG')}>
            {props.i18n.language}
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;