import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWords } from '../../selectors/wordsSelectors';
import { getSearch } from '../../selectors/searchSelectors';
import { updateWords } from '../../actions/wordsActions';

const mapStateToProps = (state, props) => ({
  words: getWords(state),
  search: getSearch(state),
  count: props.match.params.count || '1000'
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
