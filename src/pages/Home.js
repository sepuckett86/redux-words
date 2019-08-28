import React from 'react';
import PropTypes from 'prop-types';
import TopWords from '../containers/words/TopWords';
import TopSearch from '../containers/words/TopSearch';

function Home({ match, location, history }) {
  return (
    <>
      <TopSearch 
        match={match} 
        location={location} 
        history={history} />
      <TopWords match={match} />
    </>
  );
}

Home.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Home;

