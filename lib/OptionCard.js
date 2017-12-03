import React from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { Theme, Layout, Font } from '../config';

class OptionCard extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    content: PropTypes.string
  }

  static defaultProps = {
    onPress: () => {},
    content: 'default content'
  }

  render() {
    const { onPress, content } = this.props;
    const styles = {
      container: {
        borderRadius: 10,
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.Color.Onyx,
        marginVertical: 10,
        elevation: 4
      },
      content: {
        fontFamily: Font.Family.Somatic.regular,
        fontSize: Layout.isSmallDevice ? Font.Size.h5 : Font.Size.h2,
        color: Theme.Color.PastelRed
      }
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text
          style={styles.content}
        >
          {content}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default OptionCard;
