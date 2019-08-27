import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer';
import searchReducer from './searchReducer';
import dictionaryReducer from './dictionaryReducer';

export default combineReducers({
  words: wordsReducer,
  search: searchReducer,
  dictionary: dictionaryReducer
});
