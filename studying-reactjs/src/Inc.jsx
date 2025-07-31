import { useEffect } from "react";
import { useState } from "react";
function Inc(){
    const [count, setCount] = useState(0);
    const [color, setColot] = useState("green");

    useEffect (()=>{
        document.title = `count: ${count} ${color}`
    },[count,color])
    function addcount (){
        setCount(c=>c+1);
    }
    function subcount(){
        setCount(c=>c-1);
    }
    function changecolor(){
        setColot(c=> c === "green" ? "red" : "green");
    }
    return (
        <>
        <p style={{color: color}}>count: {count}</p>
        <button onClick={addcount}>add</button>
        <button onClick={subcount}>substract</button><br/>
        <button onClick={changecolor}>setcolor</button>
        </>
    );
}
export default Inc