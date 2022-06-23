import React from 'react'

const PracticeLitteMore = ({brand,km,color, newbrand}) => {
  

  
  // is inrest reuse props 
    return (<>
      <h2> DETAILS OF CAR </h2>
      <ul>
        <li> Brand of car :  {brand} </li>
        <li>Km: {km} </li>
        <li>Color: {color} </li>
      </ul>
           
           {newbrand && <p> this car is new</p> }





          
    </>)
}

export default PracticeLitteMore