 import React from 'react';
 import Person from './person/Person'
 const persons = (props) => { 
    props.persons.map((person,index) => 
       
        return <Person
            click={() => props.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.nameChangeHandler(event,person.id)}
            classesP={classesP}
        />
        });
 export defaul
