import React,{useState} from 'react'

import './App.css';
import PracticeLitteMore from './Des.props';
import CreateObject from './Keys';
import CreateAllprops from './Props';
import CreateAnotherPrac from './reminber';
import CreateProps from './testcreate';

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
  const cars = [{id:1, brand:'palio', color:'red', km:323233, newbrand:true},
  {id:2,brand:'fiesta', color:'green' , km:3234, newbrand:true},
{id:3, brand:'newiss', color:'orange' , km:32, newbrand:true}]
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
       <CreateAllprops name='Programer Floripa here' />

       <PracticeLitteMore brand='ferrari' km={30000} color='gray' newbrand={false}  />
       <PracticeLitteMore brand='ferrari' km={30000} color='gray' newbrand={false}  />
       <PracticeLitteMore brand='renault' km={343240} color='red'  newbrand={true}  />

       {cars.map((car) => (<PracticeLitteMore brand={car.brand} color={car.color}  km={car.km}  newbrand={true}  />))}
   


    <CreateProps newValue='adding' >
     <p>adding more practice about little bit code</p>
     <h1>adding more issues to think about through</h1>
     
      
    </CreateProps>


    </div>
  );
}

export default App;
