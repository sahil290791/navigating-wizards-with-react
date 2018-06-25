import React from 'react';

const UserDetailsScreen = (props) => {
  return (
    <div className='grd-row'>
      <div className='grd-row-5-6 center bg--off-white p1'>
        <label for='first-name'><strong>First Name:</strong> </label>
        <input id='first-name' type='text'/>
        <label for='first-name'><strong>Last Name:</strong> </label>
        <input id='first-name' type='text'/>
        <label for='first-name'><strong>Age:</strong> </label>
        <input id='first-name' type='number'/>
        <button className='btn brdr--rounded'>Next</button>
      </div>
    </div>
  )
};

export default UserDetailsScreen;
