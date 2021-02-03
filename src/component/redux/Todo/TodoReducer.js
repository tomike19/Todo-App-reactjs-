
import {updatedObject} from './Todoutils'

const INITIALSTATE = {
todos : [],
error : null,
isLoading:false,
}


export const fetchTodoStart = (state = INITIALSTATE,action)=> {
  return updatedObject (state,{
    error: null,
    isLoading : true,
  }

    )

}


export const fetchTodoSuccess = (state = INITIALSTATE,action)=> {
  return updatedObject (state,{
    error: null,
    isLoading : true,
    todos : action.todos
  }

    )
}


 export const fetchTodoFailed = (state = INITIALSTATE,action)=> {
  return updatedObject (state,{
    error: action.error,
    isLoading : false,
    
  }

    )

}



