import React,{useState} from 'react'

import './App.css';
import CreateObject from './Keys';

const Employees = ['martins','ProgrammerFelipe']

const AddingFunction = () => {
 console.log(Employees)
    return(<>
      <ul>
        { Employees.map((create, index) => (
          <li key={index} >{create}</li>
        )
        )}    
      </ul>
    </>)
  

}
function App() {
  const [list]= useState(['Felipe','Programmer','Programer-floripa'])
   
  //create example real if went date about database ?
  const [users] =  useState([{id:3232323, name:'ProgrammerFELIE', age:34},
   {id:34324, name:'Programmer Felipe', age:434}
  ])


  return (
    <div className="App">
      <h1>testing another way of practice and learn more react</h1>
        <AddingFunction />
        <CreateObject/>
      <ul>
        {list.map((iten) => (<li key={iten} > {iten}  </li>))}
      </ul>
       
       <ul>
        {users.map((user) => (
           <li key={user.id}> {user.name} - {user.age} </li>
          ) )}
       </ul>
    </div>
  );
}

export default App;
