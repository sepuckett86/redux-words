import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWordsFromGist } from '../../services/words';

class Words extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    changeWords: PropTypes.func.isRequired,
    search: PropTypes.string,
    count: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.loadWords(this.props.search, this.props.count);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.search !== this.props.search) {
      this.loadWords(this.props.search, this.props.count);
    }
  }

  loadWords(search, limit) {
    getWordsFromGist(search, limit)
      .then(res => {
        this.props.changeWords(res);
      });
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
