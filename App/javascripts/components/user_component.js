import React, { Component } from 'react';

import {baseColor} from '../util/base_style';

import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import ParallaxView from 'react-native-parallax-view';

import Icon from 'react-native-vector-icons/FontAwesome.js';

export default class UserComponent extends Component {
  render(){
    return (
      <ScrollView style={styles.userContainer}>
        <ParallaxView
          backgroundSource={{url: this.props.account.backgroundImage}}>
            <View>
              <View style={styles.userAvatarContainer}>
                <View><Image source={{uri: this.props.account.avatar}} style={styles.userAvatarImage} /></View>
              </View>
              <View style={styles.userNameContainer}>
                <Text style={styles.userNameText}>{this.props.account.nick_name}</Text>
              </View>
              <View style={styles.settingBlockContainer}>
                <TouchableOpacity>
                  <View style={[styles.settingBlockItem, {borderBottomWidth: 1,borderColor: baseColor.borderGrey}]}>
                    <Icon name={"file-text"} size={18} />
                    <Text style={styles.settingBlockItemText}>我的文章</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.settingBlockItem}>
                    <Icon name={"cog"} size={18} />
                    <Text style={styles.settingBlockItemText}>设置</Text>
                  </View>
                </TouchableOpacity>
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
  },
  settingBlockContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey,
    marginTop: 10
  },
  settingBlockItem: {
    paddingLeft: 8,
    flexDirection: "row",
    flexWrap: "nowrap",
    height: 40,
    alignItems: "center"
  },
  settingBlockItemText: {
    fontSize: 18,
    marginLeft: 8
  }
});