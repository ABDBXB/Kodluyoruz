import React, { useContext, useState } from "react";
// import TodoContext from "../../context/Todo";
import useTodo from ".././hooks/useTodo";
function AddNewTodo() {
  const [todoText, setTodoText] = useState("");
  //const { addNewTodo } = useContext(TodoContext);
  const { addNewTodo: add } = useTodo();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          add(todoText);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddNewTodo;
