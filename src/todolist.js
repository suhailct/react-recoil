import React from 'react'
import { useRecoilValue } from 'recoil'
import  { todoListState, filteredTodoState } from './todolistrecoil'
import TodoItem from "./todoitem";
import TodoListCreator from './todoListCreator';
import TodoListFilters from './todolistFilter';
import TodoListStat from './todoListStats'
function TodoList(){
    const todos=useRecoilValue(filteredTodoState);
return(
    <>
     <TodoListStat/>
     <TodoListFilters/>
     <TodoListCreator/>
     {todos.length>0?todos.map((it,i)=>(
         <TodoItem key={i} item={it} />
     )):<p>add items to list</p>}
    </>
)
}


export default TodoList;