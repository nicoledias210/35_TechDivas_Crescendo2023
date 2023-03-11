import React, { useState } from "react";   
import LineGraph from '../components/LineGraph';


function Analytics() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const myData = {
    type : "weekly-daily",
    date : date
  };
  const myFunc = async () => {  
  
  const result = await fetch ('http://localhost:8000/',{
  method : 'POST',
  'Content-Type' : 'application/json',
 
  })
body: JSON.Stringify(data)
}
console.log(myData);
  return(
    <div>
         <LineGraph/>
    </div>
   
    
  )
}

export default Analytics