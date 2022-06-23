import React from 'react'

const CreateProps = ({children, newValue}) => {
    return (<>
      <h1>Practice and adding some skills!!!</h1>
      {children}
      <p>the value is {newValue} </p>
    </>)
}

export default CreateProps