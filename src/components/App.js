import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Got Secrets?</h1>
        <p> Use our app to store your secret for later viewing</p>
        <p> Login or Register to get started </p>
        <button><Link to="/Login">Login</Link></button>
        <button><Link to="/Register">Register</Link></button>
      </div>
    );
  }
}

export default App;
