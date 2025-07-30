import { useState } from "react";

function Colorpicker (){

    const [color, setColor] = useState("#FFFFFF")
    const handlecolorchange= (event) => {
        setColor(event.target.value);
    }
    return(
        <div className="setterCompoment">
            <h1> color picker</h1>
            <div className="colorDisplay" style={{backgroundColor: color}}> 
                <p>slected color</p>
            </div>
        <label>select a color</label>
        <input type="color" value={color} onChange={handlecolorchange} />
        </div>
    );
}
export default Colorpicker