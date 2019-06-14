import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Wizard from './components/Wizard';
import WithoutWizard from './components/WithoutWizard';
import Home from './components/Home';
import './App.css';

const App = (props) => {
  const { history } = props;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title" onClick={() => history.push('')}>Navigating Wizards in React</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wizard-demo" component={Wizard} />
        <Route path="/screen" component={WithoutWizard} />
      </Switch>
    </div>
  );
};

export default App;
