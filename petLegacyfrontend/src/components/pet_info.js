import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
const utils = require('../backend_utils.js');


class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          birthdate: pet.birthdate || '',
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
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h6 className="component_title"><i><i className="material-icons"></i>    Tell us about your pup. You may add as many as you please!    <i className="material-icons">paw</i></i></h6>
          <Row>
            <Input s={6} labelClassName="active" placeholder="" name="first_name" value={this.state.first_name} label="First Name (the pup, not the human)" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="last_name" value={this.state.last_name} label="Last Name (the pup, not the human)" onChange={this.handleChange} />
            <Input s={12} labelClassName="active" placeholder="" name="AKC_registered_name" value={this.state.AKC_registered_name} label="AKC Name (if your pup has one, if not, no worries, neither do you)" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="zip_code" value={this.state.zip_code} label="Zip Code" onChange={this.handleChange} />
            <Input s={6} labelClassName="active" placeholder="" name="gender" value={this.state.gender} label="Gender" onChange={this.handleChange} />
            <Input s={12} labelClassName="active" placeholder="" name="breed" value={this.state.breed} label="Breed (don't end up in obedience school, spelling counts! Golden Retriever, Sheltie, Pug, Black Laborador Retriever, Pit Bull Mix, etc.)" onChange={this.handleChange} />
          </Row>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}


export default PetInfo;
