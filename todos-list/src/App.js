import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <>
      <Header title = 'To Dos List' searchBar = {false} />
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
