import React from 'React';
import {
  View,
  Button,
  Text,
  WebView,
  TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
// Android fix start 
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
// Android fix end


import Home from './components/Home';
import Counter from './components/Counter';
import Welcome from './components/Welcome'
import Tabs from './components/Tabs'

const navigationOptions = {
  navigationOptions: {
    headerStyle: { backgroundColor:'#fff', shadowOpacity: 0, elevation: 0 },
    headerTitleStyle: { fontSize: 16, fontFamily: 'Arial', alignSelf:'center' },
    headerBackTitle: null,    //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
    gesturesEnabled: false, //是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
  }
}

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Tabs, ...navigationOptions },
    Welcome: {
      screen: Welcome,
      path: 'mychat/welcome',
      navigationOptions: {
        headerTitle: '推广大使',
        headerTitleStyle: { fontSize: 16, fontFamily: 'Arial', alignSelf:'center' },
        // headerLeft: <View></View>,
        headerRight: <TouchableOpacity onPress={ ()=> shareSNS() }><Text style={{ color: '#ff9100', fontSize: 15, width: 50, textAlign:'center' }} >转发</Text></TouchableOpacity>,
        // headerStyle: { backgroundColor:'#fff', Color: '#000' },
        gesturesEnabled: false,
      }
    },
    Counter: {
      screen: Counter,
      // path: 'app/homeTwo', //使用url导航时用到, 如 web app 和 Deep Linking
      navigationOptions: { //此处设置了, 会覆盖组件内的`static navigationOptions`设置
        // header: null
      }
    },
  },
  {
    headerMode: 'screen',
    // 让安卓实现push动画, refer: https://www.shiqidu.com/p/83
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    }),
  }
);

function shareSNS() {
  console.log('shared!')
}

export default AppNavigator;
