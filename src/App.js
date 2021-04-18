import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NavbarUI from './components/NavbarUI';
import Recipes from './pages/Recipes';
import Results from './pages/Results';

import Profile from './pages/Profile';

function App(props) {
  return (
    <Router>
      <NavbarUI />
      
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/recipes" component={Recipes} />
      <ProtectedRoute exact path="/results" component={Results} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute path="/admin" component={Admin} />
    </Router>
  );
}

export default App;
