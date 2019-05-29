import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Notice from './pages/Notice';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/notice" component={Notice}/>
    </Router>
  );
}

export default App;