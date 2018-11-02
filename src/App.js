import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OldDragon from './container/OldDragon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <OldDragon />
        </header>
      </div>
    );
  }
}

export default App;
