import { useEffect, useState } from "react";

const useScroll = ()=>{
    const [scroll,setScroll]=useState({x:0,y:0});
    const controls = ()=>{
        setScroll({y:window.scrollY,x:window.scrollX})
    }
    useEffect(()=>{
        document.addEventListener("scroll",controls);
        return ()=>{
            document.removeEventListener("scroll",controls);
        }
    },[])
    return scroll;      
}
    
export default useScroll;
    
    
    
    
    //     const [scroll,setScroll] = useState({
    //       x:0,y:0
    //     })
    //     const onscroll = ()=>{
    //         console.log(window.scrollY)
    //         setScroll({y:window.scrollY,x:window.scrollX})
    //     }
    //     useEffect(()=>{
    //         document.addEventListener("scroll",onscroll)
    //         return ()=>{
    //             document.removeEventListener("scroll",onscroll)
    //         }
    //     },[])
    //     return scroll;