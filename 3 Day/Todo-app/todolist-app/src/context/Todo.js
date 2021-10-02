import React from 'react';


 const TodoContext = React.createContext({
     list : [],
     addNewTodo : () =>{},
     removeTodo : (text) =>{},
 }); 

 export default TodoContext;