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
import Search from './search.js';

class GridContainer extends Component {
  render() {
    return (
        <div className="App">
          <MemberInfo />
          <PicCarousel />
          <UserAccount />
          <InBox />
          <AdoptMe />
          <ChatBox />
          <PlayDate />
          <RegisterPet />
          <ResponsibleBreeding />
          <Search />
        </div>
    );
  }
}

export default GridContainer;
