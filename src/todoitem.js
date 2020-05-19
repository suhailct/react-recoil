import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from './todolistrecoil'

 const  TodoItem=({item})=>{
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
    console.log(index);
   const toggleItemCompletion=()=>{
    const newList=replaceItemAtIndex(todoList,index,{
        ...item,
        isComplete:!item.isComplete
    });
    setTodoList(newList);
    }

    const editItemText=({target: {value}})=>{
      const newList=replaceItemAtIndex(todoList,index,{
          ...item,
          text:value
      });
      setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
    
        setTodoList(newList);
      };
      
    return (
        <div>
         <input type="text" value={item.text} onChange={editItemText}/>
         <input type="checkbox"  checked={item.isComplete}
        onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
        </div>
    )
}

const replaceItemAtIndex=(list,index,item)=>{
    return [...list.slice(0,index),item,...list.slice(index+1)]
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

export default React.memo(TodoItem);