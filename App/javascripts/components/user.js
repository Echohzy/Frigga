import React, { Component } from 'react';

import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

import ParallaxView from 'react-native-parallax-view';

export default class UserComponent extends Component {
  render(){
    return (
      <ParallaxView
        backgroundSource={{url: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl"}} windowHeight={300}>
          <View>
            <View style={styles.userAvatarContainer}>
              <View style={{flex: 1}}/>
              <View><Image source={require("../../images/test3.jpg")} style={styles.userAvatarImage} /></View>
              <View style={{flex: 1}}/>
            </View>
          </View>
      </ParallaxView>
    );
  }
};

var styles = StyleSheet.create({
  userContainer: {
    flex: 1
  },
  userAvatarContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  userAvatarImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: "cover",
    marginTop: -40
  }
});