import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/login.js';
import GridContainer from './components/grid-container.js';
import OwnerInfo from './components/owner_info.js';
import PetInfo from './components/pet_info.js';
import ResponsibleBreeding from './components/responsible_breeding.js';
import Search from './components/search.js';
// import PicCarousel from './components/piccarousel.js';
// import UserAccount from './components/account.js';
// import InBox from './components/inbox.js';
// import AdoptMe from './components/adopt_me.js';
// import ChatBox from './components/chatbox.js';
// import PlayDate from './components/playdate.js';

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
          <Route exact path="/owner" component={OwnerInfo} />
          <Route exact path="/pet" component={PetInfo} />
          <Route exact path="/responsible-breeding" component={ResponsibleBreeding} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
