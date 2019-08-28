import React from 'react';
import PropTypes from 'prop-types';
import TopWords from '../containers/words/TopWords';
import TopSearch from '../containers/words/TopSearch';

function Home({ match }) {
  return (
    <>
      <TopSearch match={match} />
      <TopWords match={match} />
    </>
  );
}

Home.propTypes = {
  match: PropTypes.object.isRequired
};

export default Home;

