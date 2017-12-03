import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const Ionicon = ({ name, color, size }) => {
  return (
    <Icon
      name={name}
      color={color}
      size={size}
    />
  );
};

Ionicon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Ionicon;
