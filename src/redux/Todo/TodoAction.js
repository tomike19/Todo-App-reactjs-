import {axios} from 'axios'

const endpoint = 'https://adeleke-todo-list.herokuapp.com/'


export const fetchTodoStart  = () => {
  return{
    type: 'FETCH_START'
  }
  
}

export const fetchTodoFailed = (error) => {
  return{
    type: 'FETCH_FAILED',
    error : error
  }
}


export const fetchTodoSuccess = (todos) =>{
  return{
    type : 'FETCH_SUCCESS',
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
