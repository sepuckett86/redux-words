import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWords } from '../../selectors/wordsSelectors';
import { getSearch } from '../../selectors/searchSelectors';
import { updateWords } from '../../actions/wordsActions';

const mapStateToProps = state => ({
  words: getWords(state),
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  changeWords(words) {
    dispatch(updateWords(words));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words);
