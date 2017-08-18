/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const initialState = window.store;
const store = configureStore();

export default class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);
