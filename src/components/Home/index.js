import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Svg from '../UC/Svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
      return {
        tabBarLabel: '上课3',
        headerTitle: '上课1',
      };
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  componentDidMount() {
    SplashScreen.hide();
  };

  toCounter = () => {
    this.props.navigation.navigate('Counter');
  };

  toWelcome = () => {
    this.props.navigation.navigate('Welcome');
  }
  toVideo = () => {
    this.props.navigation.navigate('Video');
  }
  toICON = () => {
    this.props.navigation.navigate('Icon');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Alichs Boilerplate!
        </Text>
        <TouchableOpacity onPress={this.toCounter}>
          <Text style={styles.instructions}>Navigate to Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toWelcome}>
          <Text style={styles.instructions}>Navigate to Welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toVideo}>
          <Text style={styles.instructions}>Navigate to Video</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toICON}>
          <Text style={styles.instructions}>Navigate to ICON</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
