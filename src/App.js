import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am big dick</h1>
        <p>This is paragraph</p>
        <Person />
      </div>
    );
  }
}

export default App;
