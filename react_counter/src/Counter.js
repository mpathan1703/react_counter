import React, { useState } from 'react'
import Count from './Count'


export default function Counter() {

let  [count,setCount ]= useState (0)

// creating a function for increment 

function increment (){
   if( count >= 10 && count <50  ){
    setCount (count + 5)
   }
   else if (count >= 50){
setCount ( count + 10 )
   }
   else {
    setCount ( count + 1)
   }
}

// creating a function for decrement 

function decrement (){
    if ( count >= 10 && count <= 50 )
    {
        setCount ( count - 5 )
    }
    else if (count >50){
setCount(count - 10)
    }
else if(count > 0){
    setCount( count - 1)
}
}









  return (
  <>
  <div style={{width:"60%",background:"black",margin:"auto",marginTop:"90px",borderRadius:"20px"}}>
  <h1 style={{color:'white',textAlign:"center",padding:"10px 10px"}}>Counter</h1>

<div style={{margin:"auto",textAlign:"center",color:"white"}}>
    <Count count = {count}/>
</div>

<div style={{textAlign:"center"}}>

<button onClick={increment} type='button' style={{height:"30px",width:"80px",border:"none"}}>+</button>
  <button  onClick={decrement }type='button'  style={{height:"30px",width:"80px",border:"none",margin:"20px 20px"}}>-</button>
</div>
  </div>


  </>
  )
}
