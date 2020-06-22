import { combineReducers } from "redux";
import {postReducer} from './postReducer/postReducer'
import { commentReducer } from './commentReducer/commentReducer';

const reducers = {
    postReducer : postReducer,
    commentReducer : commentReducer
}

export const rootReducer = combineReducers(reducers)    