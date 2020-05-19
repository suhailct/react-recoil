import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from './todolistrecoil';

function TodoListCreator(){
const[text,changeText]=useState('')
const setTodos=useSetRecoilState(todoListState);

const submitTodo=()=>{

setTodos((old)=>[
...old,
{
    text,
    isComplete:false
}
]);
changeText('');

}

const onChange=({target:{value}})=>{
 changeText(value);
}

return(
    <div>
     <input onChange={onChange} value={text}/>
     <button onClick={submitTodo}>Submit</button>
    </div>
    
)

}

export default TodoListCreator;