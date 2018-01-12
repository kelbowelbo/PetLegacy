import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AdoptMe from './components/adopt_me.js';
import Login from './components/login.js';
import GridContainer from './components/grid-container.js';
import OwnerInfo from './components/owner_info.js';
import PetInfo from './components/pet_info.js';
import PetList from './components/pet_list.js';
import ResponsibleBreeding from './components/responsible_breeding.js';
import Search from './components/search.js';
import SearchResults from './components/search_results.js';
import FaIconPack from 'react-icons/lib/fa'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Pet Legacy</h1>
          </header>
          <Route exact path="/" component={Login} />
          <Route exact path="/adopt_me" component={AdoptMe} />
          <Route exact path="/grid" component={GridContainer} />
          <Route exact path="/owner" component={OwnerInfo} />
          <Route exact path="/pets" component={PetList} />
          <Route exact path="/responsible-breeding" component={ResponsibleBreeding} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search-results/:ownerId/:breed/:gender/:zipCode" component={SearchResults} />;
          <Route exact path="/pet/:ownerId/:petId" component={PetInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
