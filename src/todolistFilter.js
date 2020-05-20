import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListFilterState } from './todolistrecoil';

 const TodoListFilters=()=>{
    const [filter,setFilter]=useRecoilState(todoListFilterState);

    const onChange=({target:{value}})=>{
        setFilter(value);
    }

    return(
        <>
         <select value={filter} onChange={onChange}>
           <option value="select filter"  selected>select filter</option>
           <option value="Show Completed">completed</option>
           <option value="Show Uncompleted">pending</option>
         </select>
        </>
    )
}

export default TodoListFilters;