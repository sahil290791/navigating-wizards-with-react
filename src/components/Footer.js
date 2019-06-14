import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { disabled, enabledButtonClass, onClick, label } = props;
  return (
    <div className='grd-row-col-3-6 center'>
      <button
        style={{
          width: '100%'
        }}
        className={enabledButtonClass}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

Footer.defaultProps = {
  disabled: false,
};

Footer.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Footer;
