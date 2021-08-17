import React, { useEffect, useRef } from 'react';


const BeforLeave = (messaage)=>{
    const handle=()=>{
        messaage();
    }
    useEffect(()=>{
        document.addEventListener("mouseleave",handle);
        return ()=> document.addEventListener("mouseleave",handle)
    })
}

const UseBeforeLeave =()=>{
    const sayHello=()=>alert("LEAVING")
    BeforLeave(sayHello)
    return (
        <h1>HELLO</h1>
    )
}

export default UseBeforeLeave;