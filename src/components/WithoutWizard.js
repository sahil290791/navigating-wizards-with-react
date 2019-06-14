import React from 'react';
import {
  Route,
} from 'react-router-dom';

import ScreenA from './ScreenA';

const Home = ({ match }) => {
  return (
    <div className="grd grd-row">
      <div className="grd-row-col-6 p2">
        <Route exact path={`${match.url}/a`} component={ScreenA} />
        <Route exact path={`${match.url}/b`} component={ScreenA} />
        <Route exact path={`${match.url}/c`} component={ScreenA} />
        <Route exact path={`${match.url}/d`} component={ScreenA} />
      </div>
    </div>
  );
};

export default Home;
