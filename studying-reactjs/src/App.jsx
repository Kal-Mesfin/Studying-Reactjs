import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Stocked from "./Stocked";
import List from "./List";
function App() {

  return (
    <>
     <Header/>
     <Food/>
     <Card/>
     <Button></Button>
     <Stocked name = "apple" number = {23} isstocked ={true}/>
     <Stocked name = "mango" number = {10} isstocked ={true}/>
     <Stocked name = "banana" number = {0} isstocked ={false}/>
     <List />
     <Footer/>
    </>
  );

}
        
export default App
