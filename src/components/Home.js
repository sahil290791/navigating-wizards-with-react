import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = () => (
  <div className="grd grd-col">
    <div className="grd-row-col-12 center p2">
      <Link to="screen/a" className="btn btn--blue">
        Start navigating with without wizards
      </Link>
    </div>
    <div className="grd-row-col-12 center p2">
      <Link to="screen/c?jumped_directly=1" className="btn btn--blue">
        Jump directly to Screen C
      </Link>
    </div>
    <div className="grd-row-col-12 center p2">
      <Link to="wizard-demo" className="btn btn--blue">
        Start navigating with wizards
      </Link>
    </div>
  </div>
);

export default Home;
