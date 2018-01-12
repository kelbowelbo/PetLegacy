import React, { Component } from 'react';
import './grid-container.css';

class GridContainer extends Component {
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
            <div className="hexagon" onClick={() => this.props.history.push('/owner')}>
              Owner
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
              Pets
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => this.props.history.push('/responsible-breeding')}>
              Breeding
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
          </div>
          <div className="hex-row shift">
            <div className="hexagon invisible">
              <div className="face1"></div>
              <div className="face2"></div>
            </div>
            <div className="hexagon" onClick={() => this.props.history.push('/search')}>
              Search
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
          </div>
        </div>
      </div>
    );
  }
}

export default GridContainer;
