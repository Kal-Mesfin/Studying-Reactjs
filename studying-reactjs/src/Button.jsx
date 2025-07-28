function Button(){

    const handleclick  = (e) => e.target.textContent= "you have added item to cart";

    return (
        <button className="button" onClick={(e)=>(handleclick(e))}>click to buy</button>
    );

}
export default Button