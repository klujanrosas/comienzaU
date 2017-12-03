import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import IonIcon from './Ionicon';
import { Theme, Font, Layout } from '../config';

class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    icon: PropTypes.string,
    showIcon: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string,
    labelColor: PropTypes.string
  }

  static defaultProps = {
    label: 'Button',
    onPress: () => {},
    icon: 'ios-add-outline',
    height: Layout.isSmallDevice ? 30 : 45,
    width: 100,
    color: Theme.Color.PastelRed,
    labelColor: Theme.Color.Onyx,
    showIcon: true
  }

  render() {
    const {
      label,
      onPress,
      icon,
      height,
      width,
      color,
      labelColor,
      showIcon
    } = this.props;

    const styles = {
      container: {
        height,
        width: `${width}%`,
        borderRadius: height / 2,
        backgroundColor: color,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
      },
      label: {
        fontFamily: Font.Family.Somatic.regular,
        fontSize: Layout.isSmallDevice ? Font.Size.h5 : Font.Size.h3,
        color: labelColor
      }
    };

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        {
          showIcon &&
          <IonIcon
            name={icon}
            color={labelColor}
            size={height * 0.8}
          />
        }
        <Text
          style={styles.label}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
