import { aborted, confrimation, minji } from "./confirmation"

const UseConfirm = ()=>{
    const confirmDelete = confrimation("are you sure" ,minji,aborted)
    return (
        <>
            <button onClick={confirmDelete} >Delete photo</button>
        </>
    )
}

export default UseConfirm