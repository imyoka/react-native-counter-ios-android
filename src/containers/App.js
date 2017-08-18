import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import Counter from '../components/Counter';
import AppNavigator from '../navigator';
import * as CounterActions from '../actions/counter';

class AppWithNavigationState extends Component {
      componentDidMount() {
        this.backHandler = BackAndroid.addEventListener('backPress', () => {
          this.props.dispatch(NavigationActions.back());
          return true;
        });
      }

      componentWillUnmount() {
        this.backHandler.remove();
      }

      render() {
        return <AppNavigator screenProps={this.props} />;
      }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  const actions = [
    CounterActions,
  ];
  const creators = Object.assign({}, ...actions)
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
