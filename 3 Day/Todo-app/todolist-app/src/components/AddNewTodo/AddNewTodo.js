import React, { useContext, useState } from "react";
import TodoContext from "../../context/Todo";
function AddNewTodo() {
  const [todoText, setTodoText] = useState("");
  const { addNewTodo } = useContext(TodoContext);
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
          addNewTodo(todoText);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddNewTodo;
