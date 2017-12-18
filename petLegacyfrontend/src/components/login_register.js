import React, { Component } from 'react';
import {Button} from 'react-materialize';


class LoginRegister extends Component {
  render() {
    return (
      <div>
        <Button waves='light' node='a' href='/auth/facebook'> Login Using facebook </Button>
      </div>
    );
  }
}

export default LoginRegister;
