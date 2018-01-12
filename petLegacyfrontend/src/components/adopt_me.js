import React, { Component } from 'react';
import './grid-container.css';

class AdoptMe extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="hex-wrapper">
          <div className="hex-row">
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row shift">
            <div className="hexagon" onClick={() => window.open('http://petfinder.org')}>
              Pet Finder
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row">
            <div className="hexagon" onClick={() => window.open('http://hsna.org')}>
              Humane Society of N.A.
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => window.open('http://milldogrescue.org/')}>
              National Mill Dog Rescue
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row shift">
            <div className="hexagon invisible">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => window.open('http://www.ddfl.org/')}>
              Dumb Friends League
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => window.open('http://grfr.org')}>
              Golden Rescue
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
        </div>
      </div>
    );
    // <a href="http://grfr.org">Golden Rescue</a>
  }
}

export default AdoptMe;
