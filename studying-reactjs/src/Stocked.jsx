function Stocked(props){
    return(
        <div className="stoked">
            <p>fruit : {props.name}</p>
            <p>number : {props.number}</p>
            <p>is stocked : {props.isstocked ? "yes" : "no"}</p>
        </div>
    );
}
export default Stocked