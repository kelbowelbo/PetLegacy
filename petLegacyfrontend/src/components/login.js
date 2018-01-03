import React, { Component } from 'react';
import {Button} from 'react-materialize';


class Login extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          No need to register, just login below.
        </p>
        <Button waves='light' node='a' href='/auth/facebook'> Login Using facebook </Button>
      </div>
    );
  }
}

export default Login;
