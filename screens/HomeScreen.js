import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';

import QuestionsTab from './QuestionsTab';
import ChatTab from './ChatTab';
import { Theme } from '../config';

const HomeScreen = TabNavigator(
  {
    Questions: {
      screen: QuestionsTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicon
            name="ios-add-outline"
            color={tintColor}
            size={35}
          />
        )
      }
    },
    Chat: {
      screen: ChatTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicon
            name="ios-chatbubbles-outline"
            color={tintColor}
            size={35}
          />
        )
      }
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        elevation: 5,
        backgroundColor: Theme.Color.White
      },
      iconStyle: {
        height: 35,
        width: 35,
      },
      tabStyle: {
        height: 45,
      },
      activeTintColor: Theme.Color.PastelRed,
      inactiveTintColor: Theme.manipulate(Theme.Color.PastelRed).alpha(0.5).string(),
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        height: null,
        top: 0,
        backgroundColor: Theme.manipulate(Theme.Color.White).darken(0.05).string()
      }
    }
  }
);

export default HomeScreen;
