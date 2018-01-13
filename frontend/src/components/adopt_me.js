import React, { Component } from 'react';
import './grid-container.css';
import Footer from './footer.js';

class AdoptMe extends Component {
  render() {
    return (
      <div className="menu-container">
          <div className="hex-wrapper">
            <div className="hex-row">
              <div className="hexagon" onClick={() => this.props.history.push('/')}>
                <br></br>
                LOG OUT
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
            </div>
            <div className="hex-row shift">
              <div className="hexagon" onClick={() => window.open('http://petfinder.org')}>
                <br></br>Pet Finder
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon" onClick={()=>this.props.history.goBack()}>
                <br></br>GO HOME
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
                <br></br>ADOPT
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
              <div className="hexagon" onClick={() => window.open('http://grfr.org')}>
                Golden Rescue
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon">
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default AdoptMe;
