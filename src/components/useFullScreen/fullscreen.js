const useFullscreen = (callback)=>{
    const element = useRef();
    const runCb = (isFull)=>{
      if(callback && typeof callback === "function" ){
        callback(isFull)
      }
    }
    const handleFullScreen = ()=>{
      const {innerText}=element.current.children[1]
      if(innerText ==='full'){
        element.current.children[1].innerText="small"
        if(element.current){
          element.current.requestFullscreen();
          runCb(true)
        }
      }else{
        element.current.children[1].innerText="full"
        if(element.current){
          document.exitFullscreen();
          runCb(false)
        }
      }
    }
    return {element,handleFullScreen};
  }