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
      <ScrollView style={styles.userContainer}>
        <ParallaxView
          backgroundSource={{url: this.props.account.backgroundImage}}>
            <View>
              <View style={styles.userAvatarContainer}>
                <View><Image source={require("../../images/test3.jpg")} style={styles.userAvatarImage} /></View>
              </View>
              <View style={styles.userNameContainer}>
                <Text style={styles.userNameText}>{this.props.account.nick_name}</Text>
              </View>
            </View>
        </ParallaxView>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  userContainer: {
    flex: 1
  },
  userAvatarContainer: {
    alignItems: "center"
  },
  userAvatarImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: "cover",
    marginTop: -40
  },
  userNameContainer: {
    alignItems: "center",
    marginTop: 10
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});