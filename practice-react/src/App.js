import React,{useState} from 'react'

import './App.css';

const Employees = ['Felipe', 'ProgrammerFelipe']

const AddingFunction = () => {
 
    return(<>
      <ul>
        {Employees.map((create) => (
          <li>{create}</li>
        )
        )}    
      </ul>
    </>)
  

}
function App() {
  const [list]= useState(['Felipe','Programmer','Programer-floripa'])
  
  return (
    <div className="App">
      <h1>testing another way of practice and learn more react</h1>
        <AddingFunction/>
      <ul>
        {list.map((iten) => (<li key={iten} > {iten}  </li>))}
      </ul>
    
    </div>
  );
}

export default App;
