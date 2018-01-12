import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
const utils = require('../backend_utils.js');


class OwnerInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      address: '',
      zip_code: '',
      email: '',
      phone: ''
    };
  }
  componentDidMount() {
    utils.getFromBackend(
      '/api/getLoggedInOwner',
      (owner) => {
        this.setState({
          owner_id: owner.id,
          first_name: owner.first_name || '',
          last_name: owner.last_name || '',
          address: owner.address || '',
          zip_code: owner.zip_code || '',
          email: owner.email || '',
          phone: owner.phone || ''
        });
      },
      (error) => {
        console.log(`Unexpected error: "${error}"`);
      }
    );
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    utils.postToBackend(
      '/api/updateLoggedInOwner',
      this.state,
      (data) => {
        console.log('Request succeeded with JSON response', data);
      },
      (error) => {
        console.log(`Request failed: ${error}`);
      }
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4 className="component_title">   Tell us about yourself. You only have to do this once, we promise! </h4>
          <Row>
            <Input s={6} labelClassName="active" placeholder="" name="first_name" value={this.state.first_name} label="First Name (the human, not the pup)" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="last_name" value={this.state.last_name} label="Last Name (the human, not the pup)" onChange={this.handleChange} />
            <Input s={12} labelClassName="active" placeholder="" name="address" value={this.state.address} label="Address" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="zip_code" value={this.state.zip_code} label="Zip Code" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="phone" value={this.state.phone} label="Phone" onChange={this.handleChange} />
            <Input s={12} labelClassName="active" placeholder="" name="email" value={this.state.email} type="email" label="Email (again, the human's, not the pup's)" onChange={this.handleChange} />
          </Row>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default OwnerInfo;
