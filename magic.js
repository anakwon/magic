import "./styles.css";
import React, { useEffect, useState } from 'react';

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  
 return (
   <div>
     <p>You are {age} years old</p>
     <p>You love {fruit} the most</p>
     <p>Today's todo task is {todos.map(
        todo => <div>{todo.text}</div>
        )}
      </p>
   </div>
 )
}





export default function App() {
  return (
    <div className="App">
      <h1>{ ExampleWithManyStates() }</h1>


      <h2>Edit to see some magic happen!</h2>

    
      
    </div>
  );
}
