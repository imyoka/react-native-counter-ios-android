import React from 'React';
import {
  View,
  Button,
  Text,
  WebView,
  TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from '../Home';
import Counter from '../Counter';
import Welcome from '../Welcome'

const AppTab = new TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '上课',
        },
    },
    Counter: {
        screen: Counter,
        navigationOptions:{
            tabBarLabel: '练习',
            headerTitle: '练习',
        },
    },
    // Welcome: {
    //     screen: Counter,
    //     navigationOptions: ({navigation})=> ({
    //         tabBarLabel: '我的',
    //         headerTitle: '我的',
    //         tabBarVisible: false,
    //         headerLeft: <View></View>,
    //         headerRight: <TouchableOpacity onPress={ ()=> navigation.navigate('Counter') }><Text style={{ color: '#ff9100', fontSize: 15, width: 50, textAlign:'center' }} >转发</Text></TouchableOpacity>,
    //     })
    // },
}, {
    tabBarPosition: 'bottom', //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：’top’，’bottom’）
    swipeEnabled:false, //是否允许在标签之间进行滑动。
    animationEnabled:false, //是否在更改标签时显示动画。
    tabBarOptions: {
        style: {
            height:49
        },
        activeBackgroundColor:'white',
        activeTintColor:'#4ECBFC',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:true,
    }
});

export default AppTab;