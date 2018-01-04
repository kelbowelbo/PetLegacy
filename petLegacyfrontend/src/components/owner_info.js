import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';


class OwnerInfo extends Component {
  render() {
    return (
      <div>
        <h6 class="component_title"><i><i class="material-icons">people</i>    Tell us about yourself. You only have to do this once, we promise!    <i class="material-icons">people</i></i></h6>
        <Row>
          <Input s={6} label="First Name (the human, not the pup)" />
          <Input s={6} label="Last Name (the human, not the pup)" />
          <Input s={12} label="Address" />
          <Input s={6} label="Zip Code" />
          <Input s={6} label="Phone" />
          <Input type="email" label="Email (again, the human's, not the pup's)" s={12} />
          <Input s={12} label="Picture (you can tell a lot about a pup by the owner, so show us your pearly whites!)" />
        </Row>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
        </button>
      </div>
    );
  }
}


export default OwnerInfo;
