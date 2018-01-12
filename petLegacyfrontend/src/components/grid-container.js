import React, { Component } from 'react';
import OwnerInfo from './owner_info.js';
import PicCarousel from './piccarousel.js';
import UserAccount from './account.js';
import InBox from './inbox.js';
import AdoptMe from './adopt_me.js';
import ChatBox from './chatbox.js';
import PlayDate from './playdate.js';
import PetInfo from './pet_info.js';
import ResponsibleBreeding from './responsible_breeding.js';
import Search from './search.js';

class GridContainer extends Component {
  render() {
    return (
        <div className="App">
          <div className="bone">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
            <div className="s4"></div>
            <div className="centerbone">
              <div className="clean"></div>
            </div>
          </div>
          <OwnerInfo />
          <PicCarousel />
          <UserAccount />
          <InBox />
          <AdoptMe />
          <ChatBox />
          <PlayDate />
          <ResponsibleBreeding />
        </div>
    );
    // <Search />
  }
}

export default GridContainer;
