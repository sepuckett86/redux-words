import { UPDATE_SEARCH } from '../actions/searchActions.js';

const initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
