import React from 'react'
import { useRecoilValue } from 'recoil'
import todoListStats from './todolistrecoil';

const TodoListStat=()=>{
    const counts=useRecoilValue(todoListStats);

    return(
        <>
        <p>total tasks:{counts.getTotalCount}</p>
        <p>completed tasks:{counts.getCompletedCount}</p>
        <p>un-completed tasks:{counts.getUncompletedCount}</p>
        </>
    )
}

export default TodoListStat;