import React from 'React';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Counter from './components/Counter';
import Welcome from './components/Welcome'

const navigationOptions = {
  headerMode: 'float',
  navigationOptions: {
    title: 'Great',
    mode: 'modal',
    headerRight: <Button title="Info" />,
  }
}

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home, ...navigationOptions },
    Counter: {
      screen: Counter,
      headerMode: 'screen',
      navigationOptions: {
        header: null
      }
    },
    Welcome: {
      screen: Welcome,
      mode: 'modal',
      navigationOptions: {
        title: 'Welcome',
        headerRight: <Button title="Info" />,
      }
    },
  },
);

export default AppNavigator;
