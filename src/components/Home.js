import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = () => {
  return (
    <div className='grd grd-row'>
      <div className='grd-row-col-6 p2'>
        <Link to={'wizard-demo'} className='btn btn--blue'>
          Start navigating with wizards
        </Link>
      </div>
    </div>
  );
}

export default Home;
