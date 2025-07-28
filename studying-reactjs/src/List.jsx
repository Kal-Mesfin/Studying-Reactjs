function List(){
    const fruit = [{id: 1, name: "apple", calories: 32},
                   {id: 2, name: "banana", calories: 39},
                   {id: 3, name : "mango", calories: 96}, 
                   {id: 4, name : "strawbarry", calories : 56}];
    const listitem = fruit.map(fruit=><li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>);
    return (listitem);
}
export default List