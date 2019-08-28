import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ search, handleChange }) {
  return (
    <label>
      Search: <input type="text" value={search} onChange={handleChange} ></input>
    </label>
  );
}

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
