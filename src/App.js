import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';
class App extends Component {
  state = {
    persons: [
      {name:'Max', age:28, username:'maxshw' },
      {name:'Jirka', age:28, username:'maxshw' },
      {name:'Pepa', age:27, username:'pepazde' }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState( {
      persons:[
      {name:newName, age:28, username:'maxshw' },
      {name:newName, age:38, username:'maxshw' },
      {name:newName, age:43, username:'pepazde' }
    ]
      }
    )
  }

  nameChangeHandler = (event) => {
    this.setState ( {
      persons: [
        {name: event.target.value, age:28, username:'maxshw' },
        {name: event.target.value , age:28, username:'maxshw' },
        {name:'Pepa', age:27, username:'pepazde' }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I am geroge</h1>
        <p>This is paragraph</p>
        <button style={style} onClick={() => this.switchNameHandler('Maxmilian"!"!"!')}>Swith name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Max')}
        changed={this.nameChangeHandler}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler}>My hobbies : Thaibox</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        click={this.switchNameHandler}/>
      </div>
    );
  }
}

export default App;
