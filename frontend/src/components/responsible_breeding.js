import React, { Component } from 'react';
import Footer from './footer.js';

class ResponsibleBreeding extends Component {
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
              <div className="hexagon" onClick={() => window.open('https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-criteria-responsible-breeding"')}>
                ASPCA and Breeding
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
              <div className="hexagon" onClick={() => window.open('http://www.akc.org/dog-breeders/responsible-breeding/')}>
                American Kennel Club
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon">
                <br></br>
                BREEDING
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon" onClick={() => window.open('http://animalfreedom.org/english/opinion/pets/consequences_of_irresponsible_breeding_for_dogs.html')}>
                Animal Freedom
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
            </div>
            <div className="hex-row shift">
              <div className="hexagon invisible">
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon" onClick={() => window.open('http://www.paw-rescue.org/PAW/PETTIPS/DogTip_breedersandpetshops.php')}>
                P.A.W Rescue
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon">
                <div className="face1"></div>
                <div className="face2"></div>
              </div>
              <div className="hexagon" onClick={() => window.open('/adopt_me')}>
                Nevermind, I want to adopt
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

export default ResponsibleBreeding;
