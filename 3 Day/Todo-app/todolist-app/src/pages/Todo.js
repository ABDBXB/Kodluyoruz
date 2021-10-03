import React, { useState, useEffect } from "react";
import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList/TodoList";
import TodoContext from "../context/Todo";
import { v4 as uuid } from "uuid";
function Todo() {
  const [todoState, setTodoState] = useState({
    list: [],
  });
  const addNewTodo = (text) => {
    setTodoState({
      list: [...todoState.list, { text, id: uuid() }],
    });
  };

  const removeTodo = (id) => {
    setTodoState({
      list: todoState.list.filter((item) => item.id !== id),
    });
  };

  useEffect(() => {
    //Fetch
    console.log("Todo State Mofiyfe Modified");
    //dependency
  }, [todoState]);

  return (
    <div>
      <TodoContext.Provider
        value={{
          list: todoState.list,
          addNewTodo: addNewTodo,
          removeTodo: removeTodo,
        }}
      >
        <AddNewTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}
export default Todo;
