import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NavbarUI from './components/NavbarUI';

import Profile from './pages/Profile';


function App(props) {
  return (
    <Router>
      <NavbarUI />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <ProtectedRoute path="/admin" component={Admin} />

    </Router>
    
  );
}

export default App;
