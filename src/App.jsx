import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useReducer, useState } from "react";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {
  

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo ></AddTodo>
        {<WelcomeMessage></WelcomeMessage>}
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
