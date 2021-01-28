import * as actiontypes from './TodoActionTypes'
import {updatedObject} from './Todoutils'

const INITIALSTATE = {
todos : [],
error : null,
isLoading:false,
}


export const fetchTodoStart = (state,action)=> {
  return updatedObject (state,{
    error: null,
    isLoading : true,
  }

    )

}


export const fetchTodoSuccess = (state,action)=> {
  return updatedObject (state,{
    error: null,
    isLoading : true,
    todos : action.todos
  }

    )
}


 export const fetchTodoFailed = (state,action)=> {
  return updatedObject (state,{
    error: action.error,
    isLoading : false,
    
  }

    )

}



