import { useState } from "react";
import { useEffect } from "react";

function Resize(){
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeigh]=useState(window.innerHeight);
     useEffect(()=>{
        window.addEventListener("resize",handleresize)

        return( )=> {
            window.removeEventListener("risize",handleresize)
        };
    },[])
    function handleresize(){
        setHeigh(window.innerHeight)
        setWidth(window.innerWidth)
    }
    return(
        <>
        <p>width: {width}px</p>
        <p>height: {height}px</p>

        </>
    );
}
export default Resize