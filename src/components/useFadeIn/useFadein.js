import { useEffect, useRef } from "react";


const FADEUSE =(duration=1,delay=0)=>{
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            const{current}=element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1
        }
    })
    return {ref:element, style:{opacity:0}}
}

const UseFadeIn = ()=>{
    const fadeAll = FADEUSE(3,0.5);
    const fadeP = FADEUSE(3,2);
    return(
        <>
        <h1 {...fadeAll} >FADE IN</h1>
        <h4 {...fadeP} >FADE IN</h4>
        
        </>
    )
}

export default UseFadeIn;