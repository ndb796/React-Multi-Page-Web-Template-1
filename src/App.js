import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Notice from './pages/Notice';

import Header from './components/Header';
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <Router>
      <Header changeLanguage={changeLanguage} i18n={i18n} t={t}/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/notice" component={Notice}/>
    </Router>
  );
}

export default App;