import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';

class PetInfo extends Component {
  render() {
    return (
      <div>
        <h6 class="component_title"><i><i class="material-icons"></i>    Tell us about your pup. You may add as many as you please!    <i class="material-icons">paw</i></i></h6>
          <Row>
            <Input s={6} label="First Name (the pup, not the human)" />
            <Input s={6} label="Last Name (the pup, not the human)" />
            <Input s={12} label="AKC Name (if your pup has one, if not, no worries, neither do you)" />
            <Input s={6} label="Zip Code" />
            <Input s={6} label="Gender" />
            <Input s={12} label="Breed (don't end up in obedience school, spelling counts! Golden Retriever, Sheltie, Pug, Black Laborador Retriever, Pit Bull Mix, etc.)"/>
            <Input s={12} label="Picture (you can tell a lot about a person by their pup, so show us pup's chompers!)" />
          </Row>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
        </button>
      </div>
    );
  }
}


export default PetInfo;
