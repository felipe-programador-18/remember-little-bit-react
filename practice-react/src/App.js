import React,{useState} from 'react'

import './App.css';
import CreateObject from './Keys';
import CreateAnotherPrac from './reminber';

const Employees = ['martins','ProgrammerFelipe']

const AddingFunction = () => {
 
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
  const [users, setUser] =  useState([{id:1, name:'ProgrammerFELIE', age:34},
   {id:2, name:'Programmer Felipe', age:434}
  ])


  //create function to practice and deleted data of 
  const delAllvalue = () => {
   const get = Math.floor(Math.random() * 4)
    setUser( (prevValue) => {
      return prevValue.filter((result) => get !== result.id  )
    })
  }




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

       <button onClick={delAllvalue }>Delete!</button>

       <CreateAnotherPrac/>
    </div>
  );
}

export default App;
