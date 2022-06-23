import React,{useState} from 'react'

import './App.css';

function App() {
  const [list]= useState(['Felipe','Programmer','Programer-floripa'])
  
  return (
    <div className="App">
      <h1>testing another way of practice and learn more react</h1>

      <ul>
        {list.map((iten, i) => (<li key={iten} > {i}  </li>))}
      </ul>
    
    </div>
  );
}

export default App;
