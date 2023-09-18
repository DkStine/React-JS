import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({todoList}) => {
    return (
        <div className="container">
            <h3>Todos List</h3>
            <TodoItem todo={todoList[0]} />
        </div>
    );
};
