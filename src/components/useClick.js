import { useEffect, useRef, useState } from "react";

const MinLick = (onClick)=>{
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("click",onClick)
        }
        return ()=>{
            if(element.current){
                element.current.removeEventLisener("click",onClick)	
            }
        }
    },[])
    return element;
}

const ClickUse = ()=>{
    const sayHello =(event)=> event.target.innerText = "Crap"
    const title = MinLick(sayHello);
    return(
        <>
            <button ref={title} >hoho</button>
        </>
    )
}

export default ClickUse;