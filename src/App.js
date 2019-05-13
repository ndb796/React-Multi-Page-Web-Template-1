import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/faq" component={Faq}/>
    </Router>
  );
}

export default App;