import React, { Component } from 'react';
import MemberInfo from './member_info.js';
import PicCarousel from './piccarousel.js';
import UserAccount from './account.js';
import InBox from './inbox.js';
import AdoptMe from './adopt_me.js';
import ChatBox from './chatbox.js';
import PlayDate from './playdate.js';
import RegisterPet from './registerpet.js'
import ResponsibleBreeding from './responsible_breeding.js';

class GridContainer extends Component {
  render() {
    return (
        <div className="App">
          <MemberInfo />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <PicCarousel />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <UserAccount />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <InBox />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <AdoptMe />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <ChatBox />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <PlayDate />
        </div>
    );
  }
  render() {
    return (
        <div className="App">
          <RegisterPet />
        </div>
    );
  }
  render() {
    return (
      <div className="App">
        <ResponsibleBreeding />
      </div>
    );
  }
}

export default GridContainer;
