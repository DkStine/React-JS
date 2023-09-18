import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
// import { Footer } from "./Components/Footer";


function App() {
  let todoList = [
    {
      sno : 1,
      title : 'go to the market',
      work : 'bring 2 kg of potatoes'
    },
    {
      sno : 2,
      title : 'go to the mall',
      work : 'bring 3 perfumes'
    },
    {
      sno : 3,
      title : 'go to the grocery',
      work : 'bring 2 kg of atta'
    },
    {
      sno : 4,
      title : 'go to the lab',
      work : 'complete your assignments'
    }
  ];
  return (
    <>
      <Header title = 'To Dos List' searchBar = {false} />
      <Todos todolist = {todoList} />
      {/* <Footer/> */}
    </>
  );
}

export default App;
