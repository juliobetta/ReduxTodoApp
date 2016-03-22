import { ADD_TODO, TOGGLE_TODO } from '../actions/index';


export default function(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
    const todo = { ...action.payload, id: +(new Date()), isCompleted: false };
    return [...state, todo];

    case TOGGLE_TODO:
    return state.map((todo) => {
      if(todo.id !== action.payload.id) {
        return todo;
      }

      return { ...todo, isCompleted: !todo.isCompleted };
    });
  }

  return state;
}
