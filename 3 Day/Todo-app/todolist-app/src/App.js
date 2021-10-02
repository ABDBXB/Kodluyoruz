import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/Todo";
function App() {
  return (
  <div>
    <TodoContext.Provider value={{
      list : [],
      addNewTodo : (text)=>{},

    }}>
    <AddNewTodo/>
    <TodoList/>
    </TodoContext.Provider>
  </div>
  );
}

export default App;
