import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    search: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    updateSearch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get('searchTerm');
    if(search !== null) {
      this.props.updateSearch(search);
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.search !== this.props.search) {
      console.log(this.props.history);
      console.log(prevProps.search);
      console.log(this.props.search);
      if(this.props.search === '' || this.props.search === null) {
        this.props.history.push('');
      } else {
        this.props.history.push(`?searchTerm=${this.props.search}`);
      }
    }
  }

  render() {
    const { search, handleChange } = this.props;
    return (
      <label>
        Search: <input type="text" value={search} onChange={handleChange} ></input>
      </label>
    );
  }
}

export default SearchForm;
