import React, { Component } from 'react';
import {Footer} from 'react-materialize';
import '../App.css';

class MyFooter extends Component {
  render() {
    return (
      <div id="myFooter" className="myfootercolor">
        <Footer copyrights="&copy; 2018 Copyright" className='my_footer'
          moreLinks={
            <a className="white-text text-lighten-4 right" href="#!"></a>
          }
          links={
            <ul>
              <li><a className="white-text text-lighten-3" href="https://www.facebook.com/Garkle-516756328691679/">facebook</a></li>
              <li><a className="white-text text-lighten-3" href="https://twitter.com/garklepeeps">Twitter</a></li>
              <li><a className="white-text text-lighten-3" href="https://www.linkedin.com/company/11392257/">LinkedIn</a></li>
              <li><a className="white-text text-lighten-3" href="mailto:kelly@garkle.com">CONTACT US!</a></li>
            </ul>
          }>
        	<h6 className="white-text">PetLegacy is a solely owned product of Garkle. By using this site, you are agreeing not
          to breed in exchange for monies of any kind. To report mistreatment/unethical/illegal activities, please contact PetLegacy directly.</h6>
        	<p className="white-text text-lighten-4">Love your pets, love your world, love yourself - get your pets spayed or neutered.</p>
        </Footer>
      </div>
    );
  }
}

export default MyFooter;
