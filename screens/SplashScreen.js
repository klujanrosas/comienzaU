import React from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    return (
      <View>
        <Text>
          SplashScreen
        </Text>
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
