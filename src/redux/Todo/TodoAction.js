import {axios} from 'axios'
import * as actiontypes from './TodoActionTypes'



const endpoint = 'https://adeleke-todo-list.herokuapp.com/'


export const fetchTodoStart  = () => {
  return{
    type: actiontypes.FETCH_START
  }
  
}

const fetchTodoFailed = (error) => {
  return{
    type: actiontypes.FETCH_FAILED,
    error : error
  }
}


export const fetchTodoSuccess = (todos) =>{
  return{
    type : actiontypes.FETCH_SUCCESS,
    todos : todos

  }
}

export const fetchTodos = () =>{
 return dispatch => {
  dispatch(fetchTodoStart())
  axios.get(`${endpoint}/todos`).then(
    res => {const todos = res.data;
      dispatch (fetchTodoSuccess(todos))
    }
  ). catch((error) =>{
    dispatch (fetchTodoFailed(error))
  })
}

}
  

  export const deleteTodos = (id) =>{
    return dispatch => {
     dispatch(fetchTodoStart())
     axios.get(`${endpoint}/todos/${id}`).then(
       res =>
         dispatch (fetchTodoSuccess(todos))
       
     ). catch((error) =>{
       dispatch (fetchTodoFailed(error))
     })
   }
   
   }
