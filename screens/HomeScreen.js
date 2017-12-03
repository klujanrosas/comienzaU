import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';

import QuestionsTab from './QuestionsTab';
import ChatTab from './ChatTab';
import AboutTab from './AboutTab';
import { Theme } from '../config';

const ICON_SIZE = 40;

const HomeScreen = TabNavigator(
  {
    Questions: {
      screen: QuestionsTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicon
            name="ios-help-buoy-outline"
            color={tintColor}
            size={ICON_SIZE}
          />
        )
      }
    },
    Chat: {
      screen: ChatTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicon
            name="ios-chatboxes-outline"
            color={tintColor}
            size={ICON_SIZE}
          />
        )
      }
    },
    About: {
      screen: AboutTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicon
            name="ios-information-circle-outline"
            color={tintColor}
            size={ICON_SIZE}
          />
        )
      }
    }
  },
  {
    // initialRouteName: 'About',
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        elevation: 5,
        borderTopColor: Theme.manipulate(Theme.Color.White).darken(0.14).string(),
        borderTopWidth: 0.5,
        backgroundColor: Theme.Color.White
      },
      iconStyle: {
        height: ICON_SIZE,
        width: ICON_SIZE,
      },
      tabStyle: {
        height: ICON_SIZE + 20,
      },
      activeTintColor: Theme.Color.White,
      inactiveTintColor: Theme.manipulate(Theme.Color.EarthYellow).alpha(0.8).string(),
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        height: null,
        top: 0,
        backgroundColor: Theme.manipulate(Theme.Color.EarthYellow).lighten(0.15).string()
      }
    }
  }
);

export default HomeScreen;
