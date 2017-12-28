import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  WebView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const url = "https://ttools.hundun.cn/htmlBin/new_course_share/app_poster.html?share_id=862543"; 
const {width, height} = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  back: {
    margin: 10,
    fontSize: 20
  }
});

export default class CounterContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(50),          // 透明度初始值设为0
      isToggled: true,
    };
  }
  componentDidMount() {
    // 组件初始化 
  }

  handleToggle(isToggled) {
    isToggled = !isToggled;
    this.setState({ isToggled: isToggled });
    if (isToggled) {
      this.state.animation.setValue(350)

      Animated.timing(                       // 随时间变化而执行的动画类型
        this.state.animation,                // 动画中的变量值
        {
          toValue: 50,                            // 透明度最终变为1，即完全不透明
          duration: 200,
          easing: Easing.linear,
        }
      ).start();                                    // Start the animation
    }
    else {
      this.state.animation.setValue(50)
      Animated.timing(                       // 随时间变化而执行的动画类型
        this.state.animation,                // 动画中的变量值
        {
          toValue: 350,
          duration: 200,
          easing: Easing.linear,
        }
      ).start();                                    // Start the animation
    }
  }

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{width:width,height:height-20,backgroundColor:'gray'}}
          source={{uri:url,method: 'GET'}}
          javaScriptEnabled={true}
          />
        <TouchableOpacity onPress={ ()=> this.handleToggle(this.state.isToggled) }>
          <Animated.View                            // 可动画化的视图组件
            style={{ height: this.state.animation }}
          >
            <Text style={{ textAlign: 'center', lineHeight: 22 }}>></Text>
            <Text style={{ textAlign: 'center', lineHeight: 22, paddingBottom: 10, }}>转发指南</Text>

          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
