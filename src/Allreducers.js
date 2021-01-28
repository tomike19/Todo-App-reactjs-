import * as actiontypes from './redux/Todo/TodoActionTypes'
import {fetchTodoStart,fetchTodoSuccess,fetchTodoFailed} from './redux/Todo/TodoReducer'



const Allreducers = (state, action) => {
 switch(action.type){
   case actiontypes.FETCH_START:
     return fetchTodoStart(state,action)

     case actiontypes.FETCH_FAILED:
       return fetchTodoFailed(state,action)

       case actiontypes.FETCH_SUCCESS:
         return fetchTodoSuccess (state,action)
 }
}

export default Allreducers
