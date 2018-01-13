import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import Breed from './breed.js';
import Gender from './gender.js';
const utils = require('../backend_utils.js');


class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBreedChange = this.onBreedChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.state = {
      id: this.props.match.params.petId,
      owner_id: this.props.match.params.ownerId,
      first_name: '',
      last_name: '',
      AKC_registered_name: '',
      breed: '',
      gender: '',
      zip_code: ''
    }
  }
  componentDidMount() {
    utils.getFromBackend(
      `/api/pet/${this.state.id}`,
      (pet) => {
        this.setState({
          id: pet.id,
          owner_id: pet.owner_id || this.state.owner_id,
          first_name: pet.first_name || '',
          last_name: pet.last_name || '',
          AKC_registered_name: pet.AKC_registered_name || '',
          breed: pet.breed || '',
          gender: pet.gender || '',
          zip_code: pet.zip_code || ''
        });
        this.forceUpdate();
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
      '/api/updatePet',
      this.state,
      (data) => {
        console.log('Request succeeded with JSON response', data);
        this.props.history.goBack();
      },
      (error) => {
        console.log(`Request failed: ${error}`);
        this.props.history.goBack();
      }
    );
  }
  onBreedChange(value) {
    this.setState({breed: value});
  }
  onGenderChange(value) {
    this.setState({gender: value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <br></br>
          <h4 className="component_title">Tell us about your pup.</h4>
          <div className="container">
            <div className="row">
              <div className="col l6 l12">
                <Row>
                  <Input s={6} labelClassName="active" placeholder="" name="first_name" value={this.state.first_name} label="First Name (the pup, not the human)" onChange={this.handleChange} />
                  <Input s={6} labelClassName="active" placeholder="" name="last_name" value={this.state.last_name} label="Last Name (the pup, not the human)" onChange={this.handleChange} />
                  <Input s={12} labelClassName="active" placeholder="" name="AKC_registered_name" value={this.state.AKC_registered_name} label="AKC Name (if your pup has one, if not, no worries, neither do you)" onChange={this.handleChange} />
                </Row>
                <Row>
                  <Input m={3} labelClassName="active" placeholder="" name="zip_code" value={this.state.zip_code} label="Zip Code" onChange={this.handleChange} />
                  <div className="col m3">
                    <Gender value={this.state.gender} onChange={this.onGenderChange} />
                  </div>
                  <div className="col m6">
                    <Breed value={this.state.breed} onChange={this.onBreedChange} />
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}


export default PetInfo;
