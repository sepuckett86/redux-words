import { UPDATE_WORDS } from '../actions/wordsActions.js';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_WORDS:
      return action.payload;
    default:
      return state;
  }
};
