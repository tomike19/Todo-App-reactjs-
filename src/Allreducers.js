import * as actiontypes from '../src/component/redux/Todo/TodoActionTypes'
import {fetchTodoStart,fetchTodoSuccess,fetchTodoFailed} from '../src/component/redux/Todo/TodoReducer'



const Allreducers = (state, action) => {
 switch(action.type){
   case actiontypes.FETCH_START:
     return fetchTodoStart(state,action)

     case actiontypes.FETCH_FAILED:
       return fetchTodoFailed(state,action)

       case actiontypes.FETCH_SUCCESS:
         return fetchTodoSuccess (state,action)
         
         default:
           return state
 }
}

export default Allreducers
