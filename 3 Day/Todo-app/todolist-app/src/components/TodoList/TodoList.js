import React from "react";
import TableBody from "../TableBody";
import TableHead from "../TableHead";

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}
export default TodoList;
