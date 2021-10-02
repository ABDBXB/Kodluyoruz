import React, { useState, useEffect } from "react";
import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/Todo";
function App() {
  const [todoState, setTodoState] = useState({
    list: [],
  });
  const addNewTodo = (text) => {
    setTodoState({
      list: [...todoState.list, {text}],
    });
  };
  return (
    <div>
      <TodoContext.Provider
        value={{
          list: TodoList.list,
          addNewTodo: addNewTodo ,
        }}
      >
        <AddNewTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
