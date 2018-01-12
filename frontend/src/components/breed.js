import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Breed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: this.props.onChange,
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value});
    }
  }
  handleChange(breed) {
    const value = breed ? breed.value : '';
    this.setState({value: value});
    if (this.state.onChange) {
      this.state.onChange(value);
    }
  }

  render() {
    return (
      <div>
        <label>What breed is your pup interested in mating or dating?</label>
        <Select name="value" value={this.state.value} onChange={this.handleChange}
          options={[
            { value: "Sheltie - Blue Merle", label: "Sheltie - Blue Merle" },
            { value: "Sheltie - Sable", label: "Sheltie - Sable" },
            { value: "Collie - Rough", label: "Collie - Rough" },
            { value: "Golden Retriever", label: "Golden Retriever" },
            { value: "Pit Bull Terrier", label: "Pit Bull Terrier" },
            { value: "Sharpei", label: "Sharpei" },
            { value: "Labrador Retriever - black", label: "Labrador Retriever - black" },
            { value: "Labrador Retriever - yellow", label: "Labrador Retriever - yellow" },
            { value: "Labrador Retriever - chocolate", label: "Labrador Retriever - chocolate" },
            { value: "Beagle", label: "Beagle" },
            { value: "Boxer", label: "Boxer" },
            { value: "Pug", label: "Pug" },
            { value: "Border Collie", label: "Border Collie" },
            { value: "Poodle", label: "Poodle" }
          ]}
        />
      </div>
    );
  }
}

export default Breed;
