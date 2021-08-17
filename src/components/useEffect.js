import { useEffect, useState } from "react"

const UseEffect = ()=>{
    const sayHello = ()=>console.log("HEELo")
    const [number , setAnumber]=useState(0)
    const [anumber , setnumber]=useState(0)
    useEffect(sayHello,[number])
    return(
        <>
            <h1>helloo</h1>
            <button onClick={()=>setAnumber(number +1)}>{number}</button>
            <button onClick={()=>setnumber(anumber +1)}>{anumber}</button>
        </>
    )
}

export default UseEffect