import { connect } from 'react-redux';
import Search from '../../components/words/Search';
import { updateWords } from '../../actions/wordsActions';
import { updateSearch } from '../../actions/searchActions';
import { getSearch } from '../../selectors/searchSelectors';

const mapStateToProps = state => ({
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  changeWords(words) {
    dispatch(updateWords(words));
  },
  handleChange({ target }) {
    dispatch(updateSearch(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
