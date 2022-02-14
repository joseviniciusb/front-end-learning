import { Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Login from './pages/Login';


function App() {
  return (
   
      
    <Router>
    <Switch>
      <Route exact path="/" component={ Login } />

    </Switch>
  </Router>

     
  
  );
}

export default App;
