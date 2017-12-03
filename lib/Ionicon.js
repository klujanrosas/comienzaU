import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const IonIcon = ({ name, color, size }) => {
  return (
    <Icon
      name={name}
      color={color}
      size={size}
    />
  );
};

IonIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
};

export default IonIcon;
