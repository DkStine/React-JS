import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
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
      sno: 1,
      title: "Go to the market",
      desc: "Bring 2 kg of potatoes",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Bring 3 perfumes",
    },
    {
      sno: 3,
      title: "Go to the grocery",
      desc: "Bring 2 kg of atta",
    },
    {
      sno: 4,
      title: "Go to the lab",
      desc: "Complete your assignments",
    },
  ]);

  const addTodo = (Title, Desc) =>{
    let sno;
    
    todoList.length !== 0 ? sno = todoList[todoList.length - 1].sno + 1 : sno = 1;

    const newTodo = {
      sno,
      title : Title,
      desc : Desc,
    }

    setTodo([...todoList, newTodo]);

    console.log(newTodo);
  }

  return (
    <>
      <Header title="To Dos List" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todolist={todoList} onDelete = {onDelete} />
      <Footer/>
    </>
  );
}

export default App;
