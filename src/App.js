import React, { Component } from "react";
import classesApp from "./App.module.css";
import Person from "./person/Person";
import ErrorBoundary from './ErrorBoundery/ErrorBoundery';
class App extends Component {
  state = {
    persons: [
      { id:"aass1", name: "Max", age: 28, username: "maxshw" },
      { id:"aass2",name: "Jirka", age: 28, username: "maxshw" },
      { id:"aass3",name: "Pepa", age: 27, username: "pepazde" }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    console.log("change name handler");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); 
  };  
  
  toggleNameHandler = () => {
    console.log("toggleNameHandler");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    console.log("deletePersonHandler");
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {

    let persons = null;
    let classesP = [];

    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            if(index % 2 === 0){
              classesP.push('bckcolor')
            }
            return <ErrorBoundary key={person.id}>
                <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event,person.id)}
                classesP={classesP}
              />
              </ErrorBoundary>
            }
          )
        }
        </div>
      );
      btnClass = classesApp.Red;
      console.log(btnClass);
    }

      let classes = [];

      if(this.state.persons.length < 2){
        classes.push(classesApp.red)
      }

      if(this.state.persons.length < 1){
        classes.push(classesApp.bold)
      } 


    return (
      <div className={classesApp.App}>
        <h1>Hi, I am geroge</h1>
        <p className={classes.join(' ')}>This is paragraph</p>
        <button className={btnClass} onClick={this.toggleNameHandler}>
          Swith name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
