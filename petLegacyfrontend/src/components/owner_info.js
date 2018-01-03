import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';


class OwnerInfo extends Component {
  render() {
    return (
      <div>
        This is the Owner Information Component
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
          <Input s={12} label="address" />
          <Input s={6} label="zip code" />
          <Input type="email" label="Email" s={12} />
          <Input s={12} label="phone" />
          <Input s={12} label="picture" />
        </Row>
      </div>
    );
  }
}


export default OwnerInfo;
