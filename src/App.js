import React, { Component } from 'react';
import RegisterForm from './components/registerForm';

class App extends Component {
  submitHandler(value) {
    console.log(JSON.stringify(value, null, 4));
  }

  render() {
    return (
      <div className="App">
        <RegisterForm submitHandler={this.submitHandler} />
      </div>
    );
  }
}

export default App;
