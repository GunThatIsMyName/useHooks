import { useState } from "react";

const useInput = (initValue,validation)=>{
    const [value,setValue]=useState(initValue)
    const onChange= (event)=>{
        const {value}=event.target;
        //validation 확인 하는곳
        let willUpdate = true;
        if(typeof validation === "function"){
            willUpdate = validation(value)
        }
        if(willUpdate){
            
            setValue(value)
        }
    }
    return {value,onChange};
}


function UseInput(){
    const maxLength = (value) => !value.includes("@","!","#")
    const name = useInput("",maxLength)
    return(
        <>
            <h1>input 값 validation  </h1>
            <input {...name}></input>
        </>
    )
}

export default UseInput;