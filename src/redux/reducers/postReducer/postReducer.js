
import { GET_POST,DELETE_POST } from './../../actions/postAction/postActionTypes';


const defaultState = {
    data:[]
}
export function postReducer(state= defaultState,action){
    switch(action.type){
        case GET_POST:
            return{
                ...state,
                data:action.data
            }
        //case DELETE_POST:
          //  return{
        
                
            default:
                return state
    }
}
