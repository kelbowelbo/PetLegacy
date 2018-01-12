import React, { Component } from 'react';
import {Button} from 'react-materialize';


class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="App-intro">
            Mate, Date, or Adopt!
          </p>
          <Button waves='light' className='login_button' node='a' href='/auth/facebook'> Login Using facebook </Button>
        </div>
        <div className='background-image' />
      </div>
    );
  }
}

export default Login;
