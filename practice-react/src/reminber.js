import React, { useState } from 'react'

const CreateAnotherPrac = () => {
  const [name] = useState('Martins')
  const [show, setShow] = useState(true)
  return(<>
     
       {name === 'Martins' ? <p>your name is {name}</p> : <p>your name não é martins</p> }
       {show && <p> hide this paragraph</p>}
              
      <button  onClick={()=> setShow(curr => !curr) } >Show name</button>
  
  </>)

}
export default CreateAnotherPrac