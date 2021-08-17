import { useEffect, useState } from "react";

const useTitle = initialTitle =>{
	const [title,setTitle] = useState(initialTitle);
	const updateTitle = ()=>{
        document.title = title;
    }
	useEffect(updateTitle,[title])
    return setTitle;
}
const UseTitle = ()=>{
    const titleUpdate = useTitle();
    const clikcHandle = ()=>{
        titleUpdate("바뀐다.")
    }
    return(
        <>
            <button onClick={clikcHandle} >호호ㅗ</button>
            <div>Hi</div>
        </>
    )
}

export default UseTitle;