import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from './todolistrecoil'
import TodoItem from "./todoitem";
import TodoListCreator from './todoListCreator';
function TodoList(){
    const todos=useRecoilValue(todoListState);
return(
    <>
     <TodoListCreator/>
     {todos.map((it,i)=>(
         <TodoItem key={i} item={it} />
     ))}
    </>
)
}


export default TodoList;