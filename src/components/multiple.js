import { useState } from "react"

const Gugu =()=>{
    const [number,setCalNumber] = useState(0)
    const [result,setResult] = useState(0)
    const handleClick=(event)=>{
        const {innerText}=event.target;
        console.log(innerText)
        setCalNumber(innerText);

    }
    const handleCalculator=(event)=>{
        console.log(event.target.innerText)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(number)
    }
    return (
        <>
        <form onSubmit={handleSubmit} onClick={handleClick} className="numbers">
            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button className="number">4</button>
            <button className="number">5</button>
            <button className="number">6</button>
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
            <button className="number">0</button>
        </form>
        <div onClick={handleCalculator} className="function">
            <button className="math">+</button>
            <button className="math">-</button>
            <button className="math">X</button>
            <button className="math">%</button>
            <button className="math">=</button>
        </div>
        <div>계산 : {number}</div>
        <input type="text" value={number} />
        <div className="result">정답 : {result}</div>
        </>
    )
}

export default Gugu;