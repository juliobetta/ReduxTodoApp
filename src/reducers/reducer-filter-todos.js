import { SET_VISIBILITY_FILTER } from '../actions/index';
import { ALL } from '../constants/filters';


export default function(state = ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
    return action.payload.filter;
  }

  return state;
}
