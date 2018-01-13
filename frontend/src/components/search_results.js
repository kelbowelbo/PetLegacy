import React, { Component } from 'react';
const utils = require('../backend_utils.js');

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner_id: this.props.match.params.ownerId,
      breed: this.props.match.params.breed,
      gender: this.props.match.params.gender,
      zip_code: this.props.match.params.zipCode,
      pets: [],
      pics: utils.breedPicsMap()
    };
    this.onOwnerClick = this.onOwnerClick.bind(this);
  }
  componentDidMount() {
    utils.getFromBackend(
      `/api/petsearch/${this.state.owner_id}/${this.state.gender}/${this.state.breed}/${this.state.zip_code}`,
      (pets) => {
        console.log(`getFromBackend returned ${pets}`);
        this.setState({
          pets: pets
        });
      },
      (error) => {
        console.log(`Unexpected error: "${error}"`);
      }
    );
  }
  getBreedPic(breed) {
    const picPath = this.state.pics[breed];
    return <img src={picPath} alt={picPath} height="64" width="64" />;
  }
  onOwnerClick(event) {
    console.log(`onOwnerClick: ${event.target.id}`);
  }
  render() {
    return (
      <div>
        <h4 className="component_title">My Pets</h4>
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
              <th>Contact Owner</th>
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
                    <a className="btn waves-effect waves-light" href="mailto:kelly@garkle.com">Owner</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

// This render method only used for testing pictures.
  // render() {
  //   const testData = [
  //     "Beagle",
  //     "Border Collie",
  //     "Boxer",
  //     "Collie - Rough",
  //     "Golden Retriever",
  //     "Labrador Retriever - black",
  //     "Labrador Retriever - chocolate",
  //     "Labrador Retriever - yellow",
  //     "Pit Bull Terrier",
  //     "Poodle",
  //     "Pug",
  //     "Sharpei",
  //     "Sheltie - Blue Merle",
  //     "Sheltie - Sable"
  //   ];
  //   var fakeId = 0;
  //   return (
  //     <div>
  //       <h6 className="component_title">My Pets</h6>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Picture</th>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             <th>AKC Name</th>
  //             <th>Breed</th>
  //             <th>Gender</th>
  //             <th>Birth Date</th>
  //             <th>Zip Code</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {testData.map((pet) => {
  //             return (
  //               <tr key={fakeId++}>
  //                 <td>{this.getBreedPic(pet)}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //                 <td>{pet}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }
}

export default SearchResults;
