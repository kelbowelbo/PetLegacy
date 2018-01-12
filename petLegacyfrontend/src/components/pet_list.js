import React, { Component } from 'react';
const utils = require('../backend_utils.js');

class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner_id: 0,
      pets: [],
      pics: utils.breedPicsMap()
    };
    this.onPetEditClick = this.onPetEditClick.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    utils.getCurrentOwnerId(
      (ownerId) => {
        console.log(`got ownerId: ${ownerId}`);
        this.setState({owner_id: ownerId});
        this.getPets(ownerId);
      },
      (error) => {
        console.log(`Error retrieving owner id: ${error}`);
      }
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps.owner_id !== this.props.owner_id) {
      this.getPets(nextProps.owner_id);
    }
  }
  getPets(ownerId) {
    console.log("getPets");
    utils.getFromBackend(
      `/api/pets/owner/${ownerId}`,
      (pets) => {
        this.setState({
          pets: pets
        });
        // this.forceUpdate();
      },
      (error) => {
        console.log(`Unexpected error: "${error}"`);
      }
    );
  }
  onPetEditClick(event) {
    console.log(`onPetEditClick: ${event.target.id}`);
    this.props.history.push(`/pet/${this.state.owner_id}/${event.target.id}`);
  }
  getBreedPic(breed) {
    const picPath = this.state.pics[breed];
    return <img src={picPath} alt={picPath} height="64" width="64" />;
  }
  render() {
    console.log(`render: ${this.state.owner_id}`);
    return (
      <div>
        <h6 className="component_title">My Pets</h6>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>AKC Name</th>
              <th>Breed</th>
              <th>Gender</th>
              <th>Birth Date</th>
              <th>Zip Code</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pets.map((pet) => {
              return (
                <tr key={pet.id}>
                  <td>{this.getBreedPic(pet.breed)}</td>
                  <td>{pet.first_name}</td>
                  <td>{pet.last_name}</td>
                  <td>{pet.AKC_registered_name}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.gender}</td>
                  <td>{pet.birth_date}</td>
                  <td>{pet.zip_code}</td>
                  <td>
                    <button id={pet.id} onClick={this.onPetEditClick} className="btn waves-effect waves-light" >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button id={0} onClick={this.onPetEditClick} className="btn waves-effect waves-light" >
          Add a Pet
        </button>
      </div>
    );
  }
}

export default PetList;
