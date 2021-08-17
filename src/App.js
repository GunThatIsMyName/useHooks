import { useEffect, useRef, useState } from "react";
import useScroll from "./useScroll";

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

function App() {
  const onScreen = (isFull)=> console.log(isFull ? "we are full":"huyngy")
  const {element,handleFullScreen}=useFullscreen(onScreen);
  return (
    <>
      <div ref={element} >
        <img src="https://sb.kaleidousercontent.com/800x533/c5b0716f3d/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb.jpg"/>
        <button onClick={handleFullScreen} >full</button>
      </div>
    </>
  );
}

export default App;
