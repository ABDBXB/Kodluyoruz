import React, { useContext } from "react";
import TodoContext from "../../context/Todo";

function TableBody() {
  const { list,removeTodo } = useContext(TodoContext);
  return (
    <>
      <tbody>
        {list.map((todo, index) => {
          return (
            <tr key={index}>
              <th>{todo.text}</th>
              <button onClick={() => {
              removeTodo(todo.id);
              }}>Remove</button>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
export default TableBody;
