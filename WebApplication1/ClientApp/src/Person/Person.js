import React from 'react';
//Below we do not need to import with the Component because we are using a function
//import React, { Component } from 'react';
import './Person.css';

//ES6 format of a function should be used as much as possible
const person = (props) => {
  return(
    <div>
    <p>I'm a {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    </div>
  )
}

export default person;




// class Person extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>This is a blank react slate</h1>
//       </div>
//     )
//   }
// }

// export default Person;