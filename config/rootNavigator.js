import React, { Component } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

export const RootNavigator = StackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const prevGetStateForActionRootNavigator = RootNavigator.router.getStateForAction;

RootNavigator.router.getStateForAction = (action, state) => {
  if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
    return null;
  }
  return prevGetStateForActionRootNavigator(action, state);
};

class StateAwareRootNavigator extends Component {
  render() {
    const { dispatch, nav: state } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state
    });

    return (
      <RootNavigator
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.Navigation
  };
};

StateAwareRootNavigator.propTypes = {
  dispatch: PropTypes.any,
  nav: PropTypes.any
};

export default connect(mapStateToProps)(StateAwareRootNavigator);
