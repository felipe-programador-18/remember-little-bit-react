import React, { useState } from 'react'

const CreateAnotherPrac = () => {
  const [name] = useState('Martins')

  return(<>
      {name === 'Martins' ? <p>your name is {name}</p> : <p>your name não é martins</p> }
  
  </>)

}
export default CreateAnotherPrac