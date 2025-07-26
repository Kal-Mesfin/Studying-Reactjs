import cart from './assets/5234583.png'

function card(){

    return (
        <div className="card">
            <img className='card-image' src={cart} alt="shopping" />
            <h2>Market</h2>
            <p>This is a card for shopping list</p>
        </div>
    );

}

export default card