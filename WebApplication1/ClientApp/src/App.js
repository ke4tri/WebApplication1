import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';
//import anime from './Anime/anime';


const app = props => {

 const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 22 },
      { name: 'Stephanie', age: 99 }
    ],
    otherState: 'some other value'
  });
  
  const switchNameHandler = () => {
  setPersonsState({
    persons: [
    { name: 'MaxxThemanx', age: 28 },
    { name: 'Terry', age: 44 },
    { name: 'Tom', age: 11 }
    ]
  });
};
  

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} />
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age} />
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}>My Hobbies: Racing</Person>
    </div>
  );

}
 

export default app;
 

// const [ personsState, setPersonsState] = useState({
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Terry', age: 44 },
//     { name: 'Tom', age: 11 }
//   ],
//   otherState: 'some other value'
// });

// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//     { name: 'MaxxThemanx', age: 28 },
//     { name: 'Terry', age: 44 },
//     { name: 'Tom', age: 11 }
//     ]
//   });
// };


////BELOW IS JUST THE SAME AS THE TOP BUT EXPORTING INSDIE THE SIGNATURE
// export default class App extends Component {
//   displayName = App.name

//   render() {
//     return (
//       <div className="App">
//         <h1>THIS IS A BLANK REACT SLATE</h1>
//       </div>
     
//     );
//   }
// }
