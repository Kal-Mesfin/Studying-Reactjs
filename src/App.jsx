const App = () =>{
  const name = "john";
  const x = 20;
  const y = 30;
  const names = ['john','abel','eyob'];
  const loggedin = true;
  return (
  <>
    <div className='text-5xl'>This is a div with magnified notes
    </div>
    <p>The first paragraph</p> 
    <p>The sum of {x} and {y} is {x+y}</p>
    <ul>
      {names.map((name,index)=>(<li key = {index}>{name}</li>))}
    </ul>
    {loggedin ? <p>We are logged in</p> : <p>we are not logged in</p>}
  </>
  );
};
export default App;