import React,{useState} from 'react'


const PracticeMoreAbout = () => {
    
   const [date,setDate ] = useState([{id:1, name:'felipe', age:26 }])
   
   console.log("what have here?", date )

   const RemoveDate = () => {
     
     const getsolve = Math.floor(Math.random()*4)
    setDate( ( prevValue) => {
        return  prevValue.filter((test) => getsolve !== test.id)    
    })
   }

  return(<div>

   <h1>test and about fundament about react </h1>
   {date && date.map((result) => ( <>  <p key={result.id} >{result.name} </p> 
   <p>{result.age} </p> 
   </>
   ) )}
   <button onClick={() => setDate() } >Test Here</button>
   <button onClick={RemoveDate} >Remove Test</button>

   </div>)
}

export default PracticeMoreAbout