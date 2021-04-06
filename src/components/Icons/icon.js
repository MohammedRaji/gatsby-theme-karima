import React from 'react';
import PropTypes from 'prop-types';
import IconFacebook from './Facebook';
import IconTwitter from './Twitter';
const Icon = ({ name }) => {
  switch (name) {
    case 'facebook':
      return <IconFacebook/>;
    case 'twitter':
      return <IconTwitter/>;

    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
