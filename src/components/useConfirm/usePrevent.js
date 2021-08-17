const useprevent = ()=>{
    const listener = (event)=>{
        event.preventDefault();
        event.returnValue = '';
    }
    const enablePrevent = ()=> window.addEventListener("beforeunload",listener)
    const disablePrevent = ()=> window.removeEventListener("beforeunload",listener)
    return {enablePrevent,disablePrevent};
}

const UsePrevent = ()=>{
    const {enablePrevent,disablePrevent}=useprevent(); 
    return(
        <>
            <button onClick={enablePrevent} >protect</button>
            <button onClick={disablePrevent} >unprotect</button>
        </>
    )
}

export default UsePrevent