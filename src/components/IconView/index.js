import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Svg from '../UC/Svg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  playBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
});

export default class IconView extends Component {
  findSurrogatePair(point) {
    // assumes point > 0xffff
    var offset = point - 0x10000,
    lead = 0xd800 + (offset >> 10),
    trail = 0xdc00 + (offset & 0x3ff);
    return [lead.toString(16), trail.toString(16)];
  }
  toCode(str) {
    var r = [],c=0,p=0,i=0;
    while(i<str.length){
    c=str.charCodeAt(i++);
    if(p){
    r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
    p=0;
    }else if(0xD800 <= c && c <= 0xDBFF){
    p = c;
    }else{
    r.push(c.toString(16));
    }
    }
    return r.join('-');
  }
  strToEmoji(str){
    var arr = [];
    for(var i = 0;i<str.length;i++){
    if(str.charCodeAt(i)>55356 && str.charCodeAt(i)<65281){
    var temp = '0x1'+toCode(str[i]);
    var h_arr = findSurrogatePair(temp);
    h_arr = h_arr.map(function(item){
    return '0x'+item;
    });
    arr.push(String.fromCharCode.apply(this, h_arr));
    }else{
    arr.push(str.charAt(i));
    }
    }
    return arr.join('');
  }
  render() {
    return (
      <View style={styles.container}>
        <Svg icon="play2" size="40" fill="#black"/>
      </View>
    );
  }
}
