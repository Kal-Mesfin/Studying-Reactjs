import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Stocked from "./Stocked";
import List from "./List";
import Counter from "./Counter";
import Actbu from "./Actbu";
import Colorpicker from "./colorpicker";
function App() {

  return (
    <>
     <Header/>
     <Food/>
     <Actbu/>
     <Card/>
     <Button></Button>
     <Stocked name = "apple" number = {23} isstocked ={true}/>
     <Stocked name = "mango" number = {10} isstocked ={true}/>
     <Stocked name = "banana" number = {0} isstocked ={false}/>
     <Counter></Counter>
     <List />
     <Colorpicker/>
     <Footer/>
    </>
  );

}
        
export default App
