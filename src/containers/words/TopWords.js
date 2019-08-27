import { connect } from 'react-redux';

import Words from '../../components/words/Words';

import { getWords } from '../../selectors/wordsSelectors';
import { getSearch } from '../../selectors/searchSelectors';
import { getDictionary } from '../../selectors/dictionarySelectors';

import { updateWords } from '../../actions/wordsActions';
import { loadDictionary } from '../../actions/dictionaryActions';

const mapStateToProps = state => ({
  words: getWords(state),
  search: getSearch(state),
  dictionary: getDictionary(state)
});

const mapDispatchToProps = dispatch => ({
  updateWords: (words) => dispatch(updateWords(words)),
  loadDictionary: (words) => dispatch(loadDictionary(words))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words);
