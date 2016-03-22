export const ADD_TODO              = 'ADD_TODO';
export const TOGGLE_TODO           = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: data
  };
}


export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
}


export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  };
}
