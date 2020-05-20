import { atom, selector } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

 export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
  });

export const filteredTodoState=selector({
  key:'filteredTodoState',
   get:({get})=>{
     const filter=get(todoListFilterState);
     const state=get(todoListState);
     
     switch(filter){
      case 'Show Completed':
        return state.filter((item) => item.isComplete);
      case 'Show Uncompleted':
          return state.filter((item) => !item.isComplete);
      default:
          return state;

     }
   }
})

 export const todoListStats=selector({
   key:'todoListStats',
   get:({get})=>{
     const state=get(filteredTodoState);
     return{
       getCompletedCount:state.filter((item)=>item.isComplete===true).length,
       getUncompletedCount:state.filter((item)=>item.isComplete===false).length,
       getTotalCount:state.length
     }
   }
 })
 export default todoListStats;