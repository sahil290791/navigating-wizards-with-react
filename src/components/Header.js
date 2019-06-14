import React from 'react';

import { pop, dummyDispatch } from '../actions';

const Header = (props) => {
  const { onClick, title } = props;
  return (
    <div className='grd-row'>
      <h3 className='grd-row-col-6 txt--center'>
        <a
          className="back-button"
          onClick={onClick}>
          &lsaquo; <small>BACK</small>
        </a>
        {title}
      </h3>
    </div>
  );
};

export default Header;
