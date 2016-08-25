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

import { user } from "../../../database.js";

export default class UserComponent extends Component {
  render(){
    return (
      <ParallaxView
        backgroundSource={{url: user.backgroundImage}} windowHeight={300}>
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