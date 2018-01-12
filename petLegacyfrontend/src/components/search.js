import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import Gender from './gender.js';
import Breed from './breed.js';
const utils = require('../backend_utils.js');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner_id: 0,
      breed: '',
      gender: '',
      zip_code: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBreedChange = this.onBreedChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
  }
  componentDidMount() {
    utils.getCurrentOwnerId(
      (ownerId) => {
        this.setState({owner_id: ownerId});
      },
      (error) => {
        console.log(`Error retrieving owner id: ${error}`);
      }
    );
  }
  onBreedChange(value) {
    this.setState({breed: value});
  }
  onGenderChange(value) {
    this.setState({gender: value});
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search-results/${this.state.owner_id}/${this.state.breed}/${this.state.gender}/${this.state.zip_code}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="component_title"><i className="material-icons"></i>  Search for your pup mate, or a pup date.  <i className="material-icons"></i></h4>
        <Row>
          <div className="col m3">
            <Gender value={this.state.gender} onChange={this.onGenderChange} />
          </div>
          <div className="col m6">
            <Breed value={this.state.breed} onChange={this.onBreedChange} />
          </div>
          <Input m={3} labelClassName="active" placeholder="" name="zip_code" value={this.state.zip_code} label="Zip Code" onChange={this.handleChange} />
        </Row>
        <Row>
          <br /><br />
          <Col>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default Search;
