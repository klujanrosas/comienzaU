import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './config/rootNavigator';
import store from './config/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
