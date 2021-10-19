import React from 'react';
import './App.css';
import SignUp from './components/SignupForm/Signup';
import Login from './components/LoginForm/Login';
import { Switch, Route } from "react-router-dom";
import Error from './components/Errorpage/Error';
import Teamhome from './components/Teamhome/Teamhome';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={SignUp} exact />
        <Route path="/login" component={Login} />
        <Route path="/teamhome" component={Teamhome} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;


