import React from 'React';
import {
  View,
  Button,
  Text,
  WebView,
  TouchableOpacity } from 'react-native';
// import { Flex, WingBlank, WhiteSpace, Icon, DatePicker } from 'antd-mobile';
import { TabNavigator } from 'react-navigation';

import Svg from '../UC/Svg';
import Home from '../Home';
import Counter from '../Counter';
import Welcome from '../Welcome'
// import CourseTabPage from '../Course'

const AppTab = new TabNavigator({
    // Course: {
    //     screen: CourseTabPage,
    //     navigationOptions:{
    //         tabBarLabel: '上课',
    //         headerTitle: '上课',
    //         headerStyle: { backgroundColor:'#fff', shadowOpacity: 0, elevation: 0 },
    //         headerLeft: <TouchableOpacity onPress={ ()=> shareSNS() }><Flex justify="center" style={{
    //             width: 40,
    //             height: 40,
    //             borderRadius: 20,
    //             borderWidth: 1,
    //             borderColor: 'white',
    //             backgroundColor: 'rgba(0,0,0, 0.4)',}} onPress={ ()=> this.props.navigation.goBack() }>
    //         <Icon type='search' size='xxs' color='white'/>
    //       </Flex></TouchableOpacity>,
    //     },
    // },
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '练习',
            headerTitle: '练习',
            headerTitleStyle: { fontSize: 16, fontFamily: 'Arial', alignSelf:'center' },
            tabBarIcon: ({focused}) => <Svg icon="play2" size="20" color={focused?"#ff9100":"grey"}/>,
        },
    },
    Counter: {
        screen: Counter,
        navigationOptions:{
            tabBarLabel: '我的',
            headerTitle: '我的',
            tabBarIcon: ({focused}) => <Svg icon="pause" size="20" color={focused?"#ff9100":"grey"}/>,
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
            height:60,
            backgroundColor: 'white'
        },
        indicatorStyle: {
            height: 0
        },
        activeBackgroundColor:'white',
        activeTintColor:'#ff9100',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'grey',
        showLabel:true,
        showIcon: true,
    }
});

export default AppTab;