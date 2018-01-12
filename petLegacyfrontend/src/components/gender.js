import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Gender extends Component {
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
  handleChange(gender) {
    const value = gender ? gender.value : '';
    this.setState({value: value});
    if (this.state.onChange) {
      this.state.onChange(value);
    }
  }

  render() {
    return (
      <div>
        <label>Gender</label>
        <Select name="value" value={this.state.value} onChange={this.handleChange}
          options={[
            { value: "Female", label: "Female" },
            { value: "Male", label: "Male" }
          ]}
        />
      </div>
    );
  }
}

export default Gender;
