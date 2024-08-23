import React, { useMemo, useState } from 'react'

function Memoo() {
    let [counter,setCounter]=useState(0);

    function handleIncr(){
setCounter(counter + 1)
    }
    let final=useMemo(function(){
        let output=0;
        for(let i=1;i<inp;i++){
            console.log("mai run hogya")
            output=output+i;
        }
    return output
    },[inp])
    function handleChange(){
       setInp(e.target.value)
    }
  return (
    <div>
        <button onClick={handleIncr}>Incr  counter={counter}</button>
        <h1>Sum:{final}</h1>
        <input onChange ={handleChange}type='number' value={inp} />
    </div>
  )
}

export default Memoo