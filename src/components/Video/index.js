import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Label, Button, AlbumView } from 'teaset';
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
    right: 0,
    height: 180,
    backgroundColor: 'steelblue',
    display: 'flex'
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  playBtn: {
    position: 'absolute',
    top: 75,
    left: 175,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  welcome: {
    color: '#ff9100'
  }
});

export default class VideoPage extends Component {
  componentDidMount() {
    // this.player.seek(0)
    fetch('https://user.hundun.cn/get_user_info?phone=13051580153')
    .then(res => res.json())
    .then((result) => {
      console.log(result)
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundVideo}>
          <Video source={{uri: "https://yxs-video-test.oss-cn-beijing.aliyuncs.com/469694695/video_sd.mp4"}}
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
         <Label size='xl' text='Hello world!' />
         <Button title='Default' onPress={() => alert('Hello world')} />
      </View>
    );
  }
}
