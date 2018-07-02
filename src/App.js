import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Wizard from './components/Wizard';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Navigating Wizards in React</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wizard-demo" component={Wizard} />
        </Switch>
      </div>
    );
  }
}

export default App;
