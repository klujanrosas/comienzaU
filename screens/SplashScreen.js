import React from 'react';
import {
  View,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout, Theme } from '../config';
import logo from '../assets/images/logo-splash.png';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(
      () => {
        this.props.toHome();
      },
      1000
    );
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: Theme.Color.Onyx,
        alignItems: 'center',
        justifyContent: 'center'
      },
      image: {
        width: Layout.width - (Layout.isSmallDevice ? 100 : 50),
        maxWidth: Layout.width
      }
    };
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={logo}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toHome: () => dispatch(NavigationActions.navigate({
      routeName: 'Home'
    }))
  };
};

SplashScreen.propTypes = {
  toHome: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SplashScreen);
