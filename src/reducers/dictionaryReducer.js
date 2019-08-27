import { LOAD_DICTIONARY } from '../actions/dictionaryActions.js';

const initialState = ['a', 'b'];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DICTIONARY:
      return action.payload;
    default:
      return state;
  }
};
