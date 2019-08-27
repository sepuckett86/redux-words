import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllWordsFromGist } from '../../services/words';

class Words extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateWords: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    loadDictionary: PropTypes.func.isRequired,
    dictionary: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  componentDidMount() {
    // getAllWordsFromGist()
    //   .then(res => {
    //     this.props.loadDictionary(res);
    //   });
    this.filterDictionary();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.search !== this.props.search) {
      this.filterDictionary();
    }
  }

  filterDictionary() {
    const filtered = this.props.dictionary.filter(word => word.includes(this.props.search));
    this.props.updateWords(filtered);
  }

  render() {
    const { words } = this.props;

    const wordElements = words.map((word, i) => (
      <li key={i}>{word}</li>
    ));
  
    return (
      <ul>{wordElements}</ul>
    );
  }
}

export default Words;
