import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LoginRegister from './components/login_register.js';
import GridContainer from './components/grid-container.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Pet Legacy</h1>
          </header>
          <p className="App-intro">
            No need to register, just login below.
          </p>
          <LoginRegister />
          <GridContainer />
          <Route exact path="/" component={LoginRegister} />

        </div>
      </Router>
    );
  }
}

export default App;
