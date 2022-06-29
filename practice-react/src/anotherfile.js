import React, {useState} from 'react'



const AddingMoreProps = ({name, age,}) => {
 const [show,setShow] = useState(true)
 const [nome] = useState('Programer')
 const chore = useState(['Felipe', 'Programmer','Floripa','Adding'])

 const Insights =  [{id:1, name:'programmer floripa', age:23, salary:10000},{id:2, name:'Martins',age:24, salary:20000}]


 return(<>
     { show &&( <> 
     <h1>Adding more {name} with age is {age} </h1>
     <h2> {name} </h2>
     {nome === 'Progr' ? <p>this name is really</p> : <p>this name not exist!!</p> } 

      <ul>         
     {Insights.map((out) => (<li key={out.id} > {out.name}-{out.age}- {out.salary} </li>) )}          
      </ul>
      
      <ul>
        {chore.map((chore) => (<li key={chore} > {chore} </li>))}
      </ul>
      
      
      
      
      </>)}
     
         
    <button onClick={()=> setShow(curr => !curr) } >HIDE ALL H1 AND H2</button>
 </>)

}

export default AddingMoreProps