import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'

import ProfileWizard from './components/profile/ProfileWizard';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Navigating Wizards in React</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my_profile" component={ProfileWizard} />
        </Switch>
      </div>
    );
  }
}

export default App;
