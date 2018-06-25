import React from 'react';
import {
  Link,
} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={'my_profile'}>
        Click here to complete your profile
      </Link>
    </div>
  );
}

export default Home;
