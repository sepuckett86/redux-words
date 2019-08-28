import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  words: wordsReducer,
  search: searchReducer
});
