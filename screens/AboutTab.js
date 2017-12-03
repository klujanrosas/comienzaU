import React from 'react';
import { View, Text } from 'react-native';

import { Layout, Theme, Font } from '../config';

class AboutTab extends React.Component {
  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: Theme.Color.White,
        alignItems: 'center',
        justifyContent: 'center'
      },
      tabTitle: {
        fontFamily: Font.Family.Somatic.regular,
        fontSize: Layout.isSmallDevice ?
          Font.Size.h3 :
          Font.Size.h1,
        color: Theme.Color.Onyx,
      }
    };
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.tabTitle}
        >
          ComienzaU 2017
        </Text>
      </View>
    );
  }
}

export default AboutTab;
