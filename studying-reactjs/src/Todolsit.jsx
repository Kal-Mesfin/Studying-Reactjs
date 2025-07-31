import { useState } from "react"

function Todolist() {

    const [task, setTask] = useState (["walk the dog","finish assignment","eat dinner"]);
    const [newtask, setNewtask] = useState("");
    function handleinputchange(event){
        setNewtask(event.target.value)
    }
    function addtask(){
        if(newtask.trim() !== ""  ){
            setTask(t=>[...t,newtask])
            setNewtask("")
        }
    }
    function deletetask(index){
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }
    function movetaskup(index){
        if (index > 0) {
            const updatedTask = [...task]; 
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }
    function movetaskdown(index){
         if (index < task.length-1) {
            const updatedTask = [...task]; 
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }

    }
    return(
        <>
        <div className="to-do-list">
            <h1>To do list</h1>
            <div>
                <input type="text" value={newtask} onChange={handleinputchange} placeholder="enter a task..."/>
                <button className="add-button" onClick={addtask}>
                    add
                </button>
            </div>
        <ol>
            {task.map((task, index)=> <li key={index} className="lit">
                <span className="text">
                    {task}
                </span>
                <button className="delete-button" onClick={()=>deletetask(index)}>
                    delete
                </button>
                <button className="up" onClick={()=>movetaskup(index)}>
                    moveup
                </button>
                <button className="down" onClick={()=>movetaskdown(index)}>
                    movedown
                </button>
            </li>)}
            
        </ol>
        </div>
        </>
    );

}
export default Todolist