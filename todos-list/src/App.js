import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log('Clicked Delete of: ', todo);

    setTodo(todoList.filter((e) => {
      return e !== todo;
    }))
  }

  const [todoList, setTodo] = useState([
    {
      sno: '1.',
      title: "Go to the market",
      work: "Bring 2 kg of potatoes",
    },
    {
      sno: '2.',
      title: "Go to the mall",
      work: "Bring 3 perfumes",
    },
    {
      sno: '3.',
      title: "Go to the grocery",
      work: "Bring 2 kg of atta",
    },
    {
      sno: '4.',
      title: "Go to the lab",
      work: "Complete your assignments",
    },
  ]);
  return (
    <>
      <Header title="To Dos List" searchBar={false} />
      <Todos todolist={todoList} onDelete = {onDelete} />
      <Footer/>
    </>
  );
}

export default App;
