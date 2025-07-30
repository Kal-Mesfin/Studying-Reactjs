import { useState } from "react";


function Actbu(){
    const [name , setName ] = useState("May we take ur name");
    const handleNameChange = (event) => {
        setName(event.target.value);
        };
    const [Comment , setComment] = useState("enter any comment here")

    const handlecommentchange = (event) => {
        setComment(event.target.value);
    }
    const [paymet, setpayment] = useState()
    const handlepaymentchange = (event) => {
        setpayment(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>name pls: {name}</p>
            <textarea className="box" value = {Comment} onChange={handlecommentchange}></textarea>
            <p>               </p>
            <select value={paymet} onChange = {handlepaymentchange}>
                <option value="">select a payment option</option>
                <option value={"visa"}>visa</option>
                <option value={"mastercard"}>mastercard</option>
                <option value={"Giftcard"}>Giftcard</option>

            </select>

        </div>
    );
}
export default Actbu    