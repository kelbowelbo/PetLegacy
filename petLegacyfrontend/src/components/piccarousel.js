import React, { Component } from 'react';
// import Carousel from './carousel.js';

class PicCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <a className="carousel-item" href="#one!"><img alt="your systems does not support this" src="http://lorempixel.com/250/250/nature/1"/></a>
        <a className="carousel-item" href="#two!"><img alt="your systems does not support this" src="http://lorempixel.com/250/250/nature/2"/></a>
        <a className="carousel-item" href="#three!"><img alt="your systems does not support this" src="http://lorempixel.com/250/250/nature/3"/></a>
        <a className="carousel-item" href="#four!"><img alt="your systems does not support this" src="http://lorempixel.com/250/250/nature/4"/></a>
        <a className="carousel-item" href="#five!"><img alt="your systems does not support this" src="http://lorempixel.com/250/250/nature/5"/></a>
      </div>
    );
  }
}
export default PicCarousel;
