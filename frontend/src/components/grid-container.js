import React, { Component } from 'react';
import './grid-container.css';
import Footer from './footer.js';

class GridContainer extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="hex-wrapper">
          <div className="hex-row">
            <div className="hexagon" onClick={() => this.props.history.push('/')}>
              <br></br>LOG OUT
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row shift">
            <div className="hexagon" onClick={() => this.props.history.push('/owner')}>
              1<br></br>Enter Owner Info
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row">
            <div className="hexagon" onClick={() => this.props.history.push('/pets')}>
              2<br></br>Enter Pup<br></br>Info
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => this.props.history.push('/responsible-breeding')}>
              <br></br>Responsible Breeding
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row shift">
            <div className="hexagon" onClick={() => this.props.history.push('/search')}>
              3<br></br>Search<br></br>mate or date?
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => this.props.history.push('/adopt_me')}>
              I want to adopt a pup!
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
        </div>
        <Footer id="my_footer" />
      </div>
    );
  }
}

export default GridContainer;
