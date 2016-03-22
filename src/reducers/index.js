import { combineReducers } from 'redux';
import todos from './reducer-todos';
import visibilityFilter from './reducer-filter-todos';


const rootReducer = combineReducers({ todos, visibilityFilter });


export default rootReducer;
