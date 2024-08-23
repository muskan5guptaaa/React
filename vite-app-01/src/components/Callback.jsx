import React, { useState } from 'react'

function Callback() {
    let [counter,setCounter]=useState(0);
    let a = 1;
  return (
    <div>
        <Demo b={a} />
        <button onClick={()=>setCounter(counter+1)}>
            click - {counter}
        </button>
    </div>
  )
}
let demo=memo(function({b}){
    return(
        <div>
            hello  - {b}
        </div>
    )
})

export default Callback