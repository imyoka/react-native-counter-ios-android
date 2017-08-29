import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 180,
    backgroundColor: 'green'
  },
});

export default class VideoPage extends Component {
  componentDidMount() {
    // this.player.seek(0)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Alichs Boilerplate!
        </Text>
        <Video source={{uri: "http://yxs-video-test.oss-cn-beijing.aliyuncs.com/469694695/video_sd.mp4"}}
                     ref={ (ref) => { this.player = ref } }
                     rate={1.0}
                     volume={1.0}
                     muted={false}
                     paused={false}
                     resizeMode="cover"
                     playInBackground={true}
                     playWhenInactive={true}
                     repeat={true}
                     style={styles.backgroundVideo} />
      </View>
    );
  }
}
