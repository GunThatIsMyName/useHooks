import { useEffect, useState } from "react";
import defaultAsxios from "axios";

const world =[
  {
    title:"Minji",
    story:"Minji PERSON"
  },{
    title:"JunHyun",
    story:"AWSOME PERSON"
  }
]

const useTabs = (initailIndex,alltabs)=>{
  const [currentIndex, setCurrentIndex]=useState(initailIndex);
  return {
    currentItem : alltabs[currentIndex],
    changeItem : setCurrentIndex,
  }
}


function App() {
  const {currentItem,changeItem} = useTabs(0,world)
  return (
    <>
      {world.map((continent,index)=><button onClick={()=>changeItem(index)} >{continent.title}</button>)}
      <div>
        {currentItem.story}
      </div>
    </>
  );
}

export default App;
