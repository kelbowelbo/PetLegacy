import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Button, Card, Row, Col } from 'react-materialize';
import './App.css';
import Login from './components/login.js';
import GridContainer from './components/grid-container.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Pet Legacy</h1>
          </header>
          <Route exact path="/" component={Login} />
          <Route exact path="/grid" component={GridContainer} />
        </div>
      </Router>

    );
  }
}

export default App;
