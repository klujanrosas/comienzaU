import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './config/rootNavigator';
import store from './config/store';

export default class App extends React.Component {
  componentDidCatch(error, info) {
    console.log('Error in App component');
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
