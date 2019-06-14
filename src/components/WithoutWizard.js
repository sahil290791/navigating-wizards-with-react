import React from 'react';
import PropType from 'prop-types';
import {
  Route,
} from 'react-router-dom';

import CommonScreen from './CommonScreen';

const Home = ({ match }) => {
  return (
    <div className="grd grd-row">
      <div className="grd-row-col-6 p2">
        <Route exact path={`${match.url}/a`} component={CommonScreen} />
        <Route exact path={`${match.url}/b`} component={CommonScreen} />
        <Route exact path={`${match.url}/c`} component={CommonScreen} />
        <Route exact path={`${match.url}/d`} component={CommonScreen} />
      </div>
    </div>
  );
};

Home.propTypes = {
  match: PropType.shape({
    url: PropType.string.isRequired
  })
}

export default Home;
