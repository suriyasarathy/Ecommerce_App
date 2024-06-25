import { useState } from "react"

const Example = () => {
    // let a = 0 ;
    const[a , setA] = useState(0);
  return (
    <>
    <button onClick={()=>{
       
        setA(a + 1);
    }}>+</button>
    <p>{a}</p>
    <button>-</button>
    
    </>
  )
}

export default Example