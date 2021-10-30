import React, { useContext } from "react";
import TodoContext from "../../context/Todo";
import useTodo from ".././hooks/useTodo";

function TableBody() {
  const {list : todolist , removeTodo: remove }= useTodo();
  
  return (
    <>
      <tbody>
        {todolist.map((todo, index) => {
          return (
            <tr key={index}>
              <th>{todo.text}</th>
              <button onClick={() => {
              remove(todo.id);
              }}>Remove</button>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
export default TableBody;
