import React from 'react'
// import Footer from "./Footer"
import { useState } from 'react'
function Funapi() {
  const [myarry, setMyarry]= useState([]);
  const myfun= ()=>{
    // arrow function
    fetch('https://jsonplaceholder.typicode.com/albums')
  .then((reciveddata)=>reciveddata.json())
  .then((jsondata)=>{ console.log(myarry)
   setMyarry(jsondata)
   console.log(jsondata) 
  })
  .catch((err)=>{console.log(err)}) 
}
  return (
    <div>
      
    <button onClick={myfun}> Submit </button>
    {
      myarry.map((myitem)=>(
        <ul key={myitem.id}>
          <li>{myitem.userId},{myitem.id },{myitem.title}</li>
        </ul>
      ))
    }
    </div>
  )
}

export default Funapi;