import React from 'react';
import Home from '../pages/Home';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/words/:count" component={Home}/>
    </Router>
  );
}
