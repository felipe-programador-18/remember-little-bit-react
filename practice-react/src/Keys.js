import React,{useState} from 'react'

const CreateObject = () => {
 const [allusers] = useState([{results:1, name:'silvana martins', age:323, gender:'female'}, 
{results:2, name:'Programmerfloripa', age:29, gender:'male'},
{results:3, name:'martins martins programmer', age:20, gender:'male'}

])
console.log(allusers)

return(<>
    <ul>  
       {allusers.map((result) => (<li key={result.results} > {result.name} 
       - {result.age} - {result.gender}
       </li>))} 
          
     </ul>          
    
 </>)

}


export default CreateObject