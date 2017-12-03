import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

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
        backgroundColor: 'yellow'
      }
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text>
          {content}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default OptionCard;
