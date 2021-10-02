import { useContext } from "react";
import TodoContext  from "../../context/Todo";
function useTodo() {
  const { list, removeTodo, addNewTodo } = useContext(TodoContext);

  return {list, removeTodo, addNewTodo };
}

export default useTodo;