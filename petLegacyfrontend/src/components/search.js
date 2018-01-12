import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Gender from './gender.js';
import Breed from './breed.js';
// const utils = require('../backend_utils.js')

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: 'unknown',
      gender: '',
      zip_code: ''
    };
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleBreedChange(breed) {
    const value = breed ? breed.value : '';
    console.log(`handleBreedChange: ${JSON.stringify(value)}`);
    this.setState({breed: value});
  }
  handleGenderChange(gender) {
    const value = gender ? gender.value : '';
    console.log(`handleGenderChange: ${JSON.stringify(value)}`);
    this.setState({gender: value});
  }
  handleZipCodeChange(event) {
    this.setState({zip_code: event.target.value});
    console.log('handleZipCodeChange: ${event}');
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit: ');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="component_title"><i className="material-icons"></i>  Search for your pup mate, or a pup date.  <i className="material-icons"></i></h4>
        <Row>
          <Col>
            <Input s={6} labelClassName="active" placeholder="" name="zip_code" value={this.state.zip_code} label="Zip Code" onChange={this.handleZipCodeChange} />
          </Col>
          <Col>
            <label>Gender</label>
            <Select name="gender" value={this.state.gender} onChange={this.handleGenderChange}
              options={[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" }
              ]}
            />
          </Col>
          <Col>
            <label>What breed is your pup interested in mating or dating?</label>
            <Select name="breed" value={this.state.breed} onChange={this.handleBreedChange}
              options={[
                { value: "sheltie_blue_merle", label: "Sheltie - Blue Merle" },
                { value: "sheltie_sable", label: "Sheltie - Sable" },
                { value: "collie_rough", label: "Collie - Rough" },
                { value: "golden_retriever", label: "Golden Retriever" },
                { value: "pit_bull_terrier", label: "Pit Bull Terrier" },
                { value: "sharpei", label: "Sharpei" },
                { value: "labrador_retriever_black", label: "Labrador Retriever - black" },
                { value: "labrador_retriever_yellow", label: "Labrador Retriever - yellow" },
                { value: "labrador_retriever_chocolate", label: "Labrador Retriever - chocolate" },
                { value: "beagle", label: "Beagle" },
                { value: "boxer", label: "Boxer" },
                { value: "pug", label: "Pug" },
                { value: "border_collie", label: "Border Collie" },
                { value: "poodle", label: "Poodle" }
              ]}
              />
          </Col>
        </Row>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}

export default Search;
